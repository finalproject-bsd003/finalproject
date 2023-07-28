function Card() {
  return (
    <>
      <div className="card w-72 bg-base-100 ">
        <figure className="px-6 pt-6">
          <img
            src="https://www.thedressoutlet.com/cdn/shop/products/DD1263_NAVY_6.jpg?v=1690232796&width=720"
            className="h-50"
          />
        </figure>
        <div className="card-body items-start text-start">
          <h3 className="card-title text-sm" style={{ fontWeight: "bold" }}>
            Dylan & David Draped Corset Cowl Long Prom Dress
          </h3>
          <h5 className="text-xs">Grade: S</h5>
          <div className="flex justify-between space-x-20">
            <h4 className="text-m" style={{ fontWeight: "bold" }}>
              Rp 5.000.000
            </h4>
            <button
              className="mr-2"
              style={{ color: "currentColor" }}
              onMouseEnter={(e) => {
                e.target.style.stroke = "red";
                e.target.style.fill = "red";
              }}
              onMouseLeave={(e) => {
                e.target.style.stroke = "currentColor";
                e.target.style.fill = "none";
              }}
              onClick={(e) => {
                e.target.style.stroke = "red";
                e.target.style.fill = "red";
                setTimeout(() => {
                  e.target.style.stroke = "currentColor";
                  e.target.style.fill = "none";
                }, 500);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
                style={{ transition: "stroke 0.3s ease", fill: "none" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* pic2 */}
      <div className="card w-72 bg-base-100">
        <figure className="px-6 pt-6">
          <img
            src="https://cdn.shopify.com/s/files/1/1109/3312/files/cinderella-divine-cd7475-formal-long-sleeve-dress-evening-gown-1_500x.jpg?v=1689870627"
            className="h-50"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h3 className="card-title text-sm">
            Cinderella Divine Formal Long Sleeve Dress Evening Gown
          </h3>
        </div>
      </div>

      {/* pic 3 */}
      <div className="card w-72 bg-base-100">
        <figure className="px-6 pt-6">
          <img
            src="https://cdn.shopify.com/s/files/1/1109/3312/files/cinderella-divine-kv1050-long-formal-evening-prom-dress-1_500x.jpg?v=1689850835"
            className="h-50"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h3 className="card-title text-sm">
            Cinderella Divine Long Formal Evening Prom Dress
          </h3>
        </div>
      </div>

      {/* pic4 */}
      <div className="card w-72 bg-base-100">
        <figure className="px-6 pt-6">
          <img
            src="https://cdn.shopify.com/s/files/1/1109/3312/files/cinderella-divine-kv1050-long-formal-evening-prom-dress-1_500x.jpg?v=1689850835"
            className="h-50"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h3 className="card-title text-sm">
            Cinderella Divine Long Formal Evening Prom Dress
          </h3>
        </div>
      </div>

      <div className="card w-72 bg-base-100">
        <figure className="px-6 pt-6">
          <img
            src="https://cdn.shopify.com/s/files/1/1109/3312/files/cinderella-divine-kv1050-long-formal-evening-prom-dress-1_500x.jpg?v=1689850835"
            className="h-50"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h3 className="card-title text-sm">
            Cinderella Divine Long Formal Evening Prom Dress
          </h3>
        </div>
      </div>

      <div className="card w-72 bg-base-100">
        <figure className="px-6 pt-6">
          <img
            src="https://cdn.shopify.com/s/files/1/1109/3312/files/cinderella-divine-kv1050-long-formal-evening-prom-dress-1_500x.jpg?v=1689850835"
            className="h-50"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h3 className="card-title text-sm">
            Cinderella Divine Long Formal Evening Prom Dress
          </h3>
        </div>
      </div>

      <div className="card w-72 bg-base-100">
        <figure className="px-6 pt-6">
          <img
            src="https://cdn.shopify.com/s/files/1/1109/3312/files/cinderella-divine-kv1050-long-formal-evening-prom-dress-1_500x.jpg?v=1689850835"
            className="h-50"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h3 className="card-title text-sm">
            Cinderella Divine Long Formal Evening Prom Dress
          </h3>
        </div>
      </div>

      <div className="card w-72 bg-base-100">
        <figure className="px-6 pt-6">
          <img
            src="https://cdn.shopify.com/s/files/1/1109/3312/files/cinderella-divine-kv1050-long-formal-evening-prom-dress-1_500x.jpg?v=1689850835"
            className="h-50"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h3 className="card-title text-sm">
            Cinderella Divine Long Formal Evening Prom Dress
          </h3>
        </div>
      </div>

      <div className="card w-72 bg-base-100">
        <figure className="px-6 pt-6">
          <img
            src="https://cdn.shopify.com/s/files/1/1109/3312/files/cinderella-divine-kv1050-long-formal-evening-prom-dress-1_500x.jpg?v=1689850835"
            className="h-50"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h3 className="card-title text-sm">
            Cinderella Divine Long Formal Evening Prom Dress
          </h3>
        </div>
      </div>

      <div className="card w-72 bg-base-100">
        <figure className="px-6 pt-6">
          <img
            src="https://cdn.shopify.com/s/files/1/1109/3312/files/cinderella-divine-kv1050-long-formal-evening-prom-dress-1_500x.jpg?v=1689850835"
            className="h-50"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h3 className="card-title text-sm">
            Cinderella Divine Long Formal Evening Prom Dress
          </h3>
        </div>
      </div>
    </>
  );
}

export default Card;
