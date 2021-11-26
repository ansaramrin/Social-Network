import './Profile.css';

export default function Profile() {
  return (
    <div className = "prof">
      <div class="container mt-4 mb-4 p-3 d-flex justify-content-center">
        <div class="card p-4">
          <div class=" image d-flex flex-column justify-content-center align-items-center"> <button class="btn btn-secondary"> <img src="http://pngimg.com/uploads/samurai/samurai_PNG4.png" height="100" width="100" /></button> <span class="name mt-3">Ansar Amrin</span> <span class="idd">@esdeath02</span>
            <div class="d-flex flex-row justify-content-center align-items-center mt-3"> <span class="number">777 <span class="follow">Followers</span></span> </div>
            <div class=" d-flex mt-2"> <button class="btn1 btn-dark">Edit Profile</button> </div>
            <div class="text mt-3">
               <span>Web developer</span> 
            </div>
            <div class="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center"> <span><i class="fa fa-twitter"></i></span> <span><i class="fa fa-facebook-f"></i></span> <span><i class="fa fa-instagram"></i></span> <span><i class="fa fa-linkedin"></i></span> </div>
           
          </div>
        </div>
      </div>  
    </div>
    
  )
}