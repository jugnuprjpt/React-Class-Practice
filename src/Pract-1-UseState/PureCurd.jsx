import React, { useState } from "react";

const PureCurd = () => {
  const initialValue = { username: "", email: "", address: "" }
  const [formState,setFormState] = useState(initialValue)

  const handleAdd=(e)=>{
    const {name,value} = e.target;
    setFormState({...formState,[name]:value})
  }
  
  const handleSubmit=(e,data)=>{
    e.preventDefault();
    setFormState({...formState,data})
    console.log(formState,"newOne")
  }

    return (
    <>
      <h1 className="p-2">Employee Detail</h1>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xs-12 col-sm-10 col-md-8 col-lg-5">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="p-2" htmlFor="">Employe Name</label>
                <input type="text" className="form-control" name = "username" value={formState.name} onChange={handleAdd}/>
              </div>
              <br />
              <div className="form-group">
                <label className="p-2" htmlFor="">Employe Email</label>
                <input type="email" className="form-control" name="email" value={formState.email}  onChange={handleAdd}/>
              </div>
              <br />
              <div className="form-group">
                <label className="p-2" htmlFor="">Employe Address</label>
                <input type="text" className="form-control" name= "address" value={formState.address}  onChange={handleAdd}/>
              </div>
              <button className="btn btn-success form-control mt-3" type="submit" 

              >Button</button>
                {/* {edit ? "Update" : "Add"} */}
            </form>
          </div>
        </div>
        <table className=" table table-bordered mt-5">
          <thead>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Adress</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{formState.username}</td>
              <td>{formState.email}</td>
              <td>{formState.address}</td>
              <td>
                <button className="btn btn-primary">Edit</button>
              </td>
              <td>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PureCurd;
