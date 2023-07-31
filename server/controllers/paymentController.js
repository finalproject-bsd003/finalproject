// paymentController.js

const CryptoJS = require('crypto-js');

class PaymentController {
    static async makePayment(req, res) {
        try {
            console.log("masuk payment");
            // adjust with your iPaymu api key & va 
            var apikey = "SANDBOX952E0321-0A01-4F86-93C9-1BE729F9DDC6";
            var va = "0000002258387876";
            var url = 'https://sandbox.ipaymu.com/api/v2/payment'; // development mode
            // var url = 'https://my.ipaymu.com/api/v2/payment/direct'; // for production mode


            // console.log(req.body);

            const { name, phone, amount, email, comments } = req.body

            var body = {
                buyerName: name,
                buyerPhone: phone,
                buyerEmail: email,
                product: ["Dress"],
                qty: ["1"],
                price: ["5000"],
                description: [comments],
                returnUrl: "http://localhost:5173/thank-you-page",
                notifyUrl: "https://webhook.site/703eb3d8-e974-45e0-b1c8-e2de6e6f2018", // your callback url
                cancelUrl: "http://localhost:5173/failed-page",
                "referenceId": "5678", // your reference id or transaction id
                "paymentMethod": "qris",
                "paymentChannel": "qris",
                pickupArea: null,
                pickupAddress: null
            };

            // Generate signature
            var bodyEncrypt = CryptoJS.SHA256(JSON.stringify(body));
            var stringtosign = "POST:" + va + ":" + bodyEncrypt + ":" + apikey;

            // Load 'node-fetch' dynamically using import()
            import('node-fetch').then((module) => {
                const fetch = module.default;

                // Request
                fetch(url, {
                    method: "POST",
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        va: va,
                        signature: CryptoJS.enc.Hex.stringify(CryptoJS.HmacSHA256(stringtosign, apikey)),
                        timestamp: '20150201121045'
                    },
                    body: JSON.stringify(body)
                })
                    .then((response) => response.json())
                    .then((responseJson) => {
                        console.log(responseJson, "<<<<<<<<<<<<");
                        // res.json(responseJson);
                        res.status(200).json(responseJson)
                    })
                    .catch((error) => {
                        console.error('Error making payment:', error);
                        res.status(500).json({ error: 'An error occurred while making the payment' });
                    });
            });
        } catch (error) {
            console.error('Error making payment:', error);
            res.status(500).json({ error: 'An error occurred while making the payment' });
        }
    }
}

module.exports = PaymentController;