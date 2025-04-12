import  matressImage from '../../assets/mattress2.jpg'
export default function Card(){
   return <div className="card bg-base-100 w-100 shadow-sm">
    <figure>
      <img
        src={matressImage}
        alt="Shoes" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">Matress Name</h2>
      <p>Description of the matress goes here</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Contact Us</button>
      </div>
    </div>
  </div>
}