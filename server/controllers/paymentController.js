<<<<<<< HEAD
// paymentController.js

const CryptoJS = require('crypto-js');

class PaymentController {
    static async makePayment(req, res) {
        try {
            console.log("masuk payment");
=======
const CryptoJS = require('crypto-js');

class PaymentController {
    static async makePayment(req, res, next) {
        try {
            // console.log("masuk payment");
>>>>>>> ab84637fa2a207d2c3b815a452b91d2947a5dff2
            // adjust with your iPaymu api key & va 
            const apikey = "SANDBOX952E0321-0A01-4F86-93C9-1BE729F9DDC6";
            const va = "0000002258387876";
            const url = 'https://sandbox.ipaymu.com/api/v2/payment'; // development mode
<<<<<<< HEAD
            // var url = 'https://my.ipaymu.com/api/v2/payment/direct'; // for production mode
=======
            // const url = 'https://my.ipaymu.com/api/v2/payment/direct'; // for production mode
>>>>>>> ab84637fa2a207d2c3b815a452b91d2947a5dff2


            // console.log(req.body);

            const { name, phone, amount, email, comments } = req.body

<<<<<<< HEAD
            var body = {
                buyerName: req.additionalData.username,
                buyerPhone: phone,
                buyerEmail: req.additionalData.email,
=======
            const body = {
                buyerName: name,
                buyerPhone: phone,
                buyerEmail: email,
>>>>>>> ab84637fa2a207d2c3b815a452b91d2947a5dff2
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
<<<<<<< HEAD
            var bodyEncrypt = CryptoJS.SHA256(JSON.stringify(body));
            var stringtosign = "POST:" + va + ":" + bodyEncrypt + ":" + apikey;
=======
            const bodyEncrypt = CryptoJS.SHA256(JSON.stringify(body));
            const stringtosign = "POST:" + va + ":" + bodyEncrypt + ":" + apikey;
>>>>>>> ab84637fa2a207d2c3b815a452b91d2947a5dff2

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
<<<<<<< HEAD
                        console.log(responseJson, "<<<<<<<<<<<<");
=======
                        // console.log(responseJson, "<<<<<<<<<<<<");
>>>>>>> ab84637fa2a207d2c3b815a452b91d2947a5dff2
                        // res.json(responseJson);
                        res.status(200).json(responseJson)
                    })
                    .catch((error) => {
<<<<<<< HEAD
                        console.error('Error making payment:', error);
                        res.status(500).json({ error: 'An error occurred while making the payment' });
                    });
            });
        } catch (error) {
            console.error('Error making payment:', error);
            res.status(500).json({ error: 'An error occurred while making the payment' });
=======
                        // console.error('Error making payment:', error);
                        res.status(500).json({ error: 'An error occurred while making the payment' });
                    });
            });
        } catch (err) {
            next(err)
>>>>>>> ab84637fa2a207d2c3b815a452b91d2947a5dff2
        }
    }
}

<<<<<<< HEAD
module.exports = PaymentController;
=======
module.exports = PaymentController;
>>>>>>> ab84637fa2a207d2c3b815a452b91d2947a5dff2
