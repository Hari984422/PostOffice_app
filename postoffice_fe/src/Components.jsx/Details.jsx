import React from 'react'

function Details() {
    return (
        <div className="details">
            <form action="">
                <label htmlFor="">Sales Report:</label>
                <select className='btn btn-secondary' >
                    <option >Advance</option>
                </select>
                <button className='btn btn-secondary mx-1'>Fetch Data</button>
                <button className='btn btn-secondary mx-1'>Add Row</button>
                <button className='btn btn-secondary mx-1'>Delete Row</button>
                <button className='btn btn-secondary mx-1'>Print Table</button>
            </form>

            <div class="container">
    <table class="table table-bordered">
        <thead>
            <tr>
                <th colspan="12">
                    <h4>Vijayanagar NBC: Business Performance Report of Advance customers for March 2024</h4>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>Customer Code</th>
                <th>Customer No</th>
                <th>Customer Name</th>
                <th>Invoice No</th>
                <th>No of Articles</th>
                <th>Speed Revenue</th>
                <th>Discount Amount</th>
                <th>Net Amount</th>
                <th>CGST</th>
                <th>SGST</th>
                <th>Penalist</th>
                <th>Gross Amount</th>
            </tr>
            {/* <!-- Here goes the data rows --> */}
        </tbody>
    </table>
</div>

        </div>
    )
}

export default Details
