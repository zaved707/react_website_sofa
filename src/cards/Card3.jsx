import  matressImage from '../assets/mattress1.png'
export default function Card(){
   return <div class="card bg-base-100 w-100 shadow-sm">
    <figure>
      <img
        src={matressImage}
        alt="Shoes" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">Matress Name</h2>
      <p>Description of the matress goes here</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Contact Us</button>
      </div>
    </div>
  </div>
}