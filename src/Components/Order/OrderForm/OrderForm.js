import React from 'react';
import { useForm } from "react-hook-form";
const OrderForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-froup mb-3">
            <select className="form-control" name="gender" {...register("Gender", { required: true })}>
              <option disabled={false} value="Not set">
                Select Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Not set">Other</option>
            </select>
            {errors.Gender && <span className="text-danger">This field is required</span>}
          </div>

          <div className="form-group mb-3">
            <input className="form-control" type="text" placeholder="Name" {...register("Name", { required: true })} />
            {errors.Name && <span>This field is required</span>}
          </div>
          <div className="form-group mb-3">
            <input className="form-control" type="text" placeholder="Phone Number" {...register("Phone", { required: true })} />
            {errors.Phone && <span>This field is required</span>}
          </div>
          <div className="form-group mb-3">
            <input className="form-control" type="email" placeholder="Email" {...register("Email", { required: true })} />
            {errors.Email && <span>This field is required</span>}
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export default OrderForm;