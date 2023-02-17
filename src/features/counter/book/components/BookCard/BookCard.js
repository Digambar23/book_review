

function Bookcard(props){ 
  const book =props.data;
    return(
        <div className="card">
  <img src="https://2.bp.blogspot.com/-BDL-fHYLsUM/UwrzVZ_kOsI/AAAAAAAABfI/mlTFJhNueIE/s1600/Final+to+print+1.jpg"
   className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">Roses & Lilies</h5>
  <p>Digambar Shinde</p>
   <p>2022</p> 
  </div>
</div>

    );

}
export default Bookcard;