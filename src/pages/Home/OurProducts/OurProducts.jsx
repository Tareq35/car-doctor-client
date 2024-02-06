import img1 from "../../../assets/images/products/1.png";
import img2 from "../../../assets/images/products/2.png";
import img3 from "../../../assets/images/products/3.png";
import img4 from "../../../assets/images/products/4.png";
import img5 from "../../../assets/images/products/5.png";
import img6 from "../../../assets/images/products/6.png";

const OurProducts = () => {
  return (
    <div className="my-4">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-orange-600">Popular Products</h3>
        <h2 className="text-5xl">Browse Our Products</h2>
        <p>
          the majority hav esuffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={img1} alt="Shoes" className="rounded-xl h-[303px]" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Cool LED Light</h2>
            <p className="text-xl text-orange-500">$20.00</p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={img2} alt="Shoes" className="rounded-xl h-[303px]" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Cool LED Light</h2>
            <p className="text-xl text-orange-500">$20.00</p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={img3} alt="Shoes" className="rounded-xl h-[303px]" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Car Air Filter</h2>
            <p className="text-xl text-orange-500">$20.00</p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={img4} alt="Shoes" className="rounded-xl h-[303px]" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Cool LED Light</h2>
            <p className="text-xl text-orange-500">$20.00</p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={img5} alt="Shoes" className="rounded-xl h-[303px]" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Cool LED Light</h2>
            <p className="text-xl text-orange-500">$20.00</p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={img6} alt="Shoes" className="rounded-xl h-[303px]" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Car Engine Plug</h2>
            <p className="text-xl text-orange-500">$20.00</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-10">
      <button className="btn btn-outline btn-secondary">More Products</button>
      </div>
    </div>
  );
};

export default OurProducts;
