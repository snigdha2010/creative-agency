import React from 'react';

const ServiceList = ({service}) => {
    console.log("service",service)
    return (
        <>
        <table className='table table=corderless'>
            <thead style={{backgroundColor:'#F5F6FA'}} >
                <tr>  
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Email ID</th>
                <th className="text-secondary" scope="col">Service</th>
                <th className="text-secondary" scope="col">Project Details</th>
                <th className="text-secondary" scope="col">Status</th>
                </tr>
            </thead>
            <tbody className='bg-white' >
                {
                    service.map(service=> 
                <tr>
                    <td>{service.name}</td>
                    <td>{service.email}</td>
                    <td>{service.design}</td>
                    <td>{service.detail}</td>
                    <td>
                        <select>
                            <option value="Done">Done</option>
                            <option value="OnGoing">OnGoing</option>
                            <option value="Pending">Pending</option>
                        </select>
                    </td>
                </tr>
                )}
            </tbody>
        </table>
        </>
    );
};

export default ServiceList;