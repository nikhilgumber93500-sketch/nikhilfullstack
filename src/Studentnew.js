function Studentnew(props)
{
    return(
        <div className="backred">
        <h1>Name:{props.name} </h1>
           <h1>Course:{props.course} </h1>
         <h2>Address:{props.address.state}  {props.address.city}  {props.address.pincode}</h2>
             
        </div>
    )
}
export default Studentnew