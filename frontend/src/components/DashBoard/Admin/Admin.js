import React from 'react'
import './Admin.css'

const Admin = () => {
  return (
    <div>
         <section class="course">
        <h1>Admin Dashboard</h1>
        <p>Access a comprehensive overview of all user data at a glance on this dedicated admin page.</p>
    
        <div class="row">
            <div class="course-col">
                <h3>All Users</h3>
                <p>
                Effortlessly access and manage all user data by simply visiting our dedicated admin page. This centralized hub streamlines user data oversight, allowing admins to review profiles, activity logs, and support requests with ease.
                </p>
                <a class="hero-btn" href="/admin/allusers">Visit To Know More</a>
            </div>

           
            <div class="course-col">
                <h3>Sports Registration</h3>
                <p>
                View and manage comprehensive sports registration data effortlessly through our dedicated admin page. This centralized hub simplifies oversight, providing access to all registration records, participant details, and payment information.
                </p>
                <a class="hero-btn" href="/admin/showtable">Visit To Know More</a>
            </div>

            <div class="course-col">
                <h3>Document Verification</h3>
                <p>
                {/* Simplify document verification for registered users with our user-friendly admin page. Access all necessary documents and information in one centralized location, streamlining the verification process.  */}
                Commins Soon!!
                </p>
                <a class="hero-btn" href="/">Visit To Know More</a>
            </div>
            <div class="course-col">
                <h3>All Games</h3>
                <p>
                Simplify all games for registered users with our user-friendly admin page. Access all sports wise games data and information in one centralized location, streamlining the verification process. 
                </p>
                <a class="hero-btn" href="/admin/allgames">Visit To Know More</a>
            </div>

        </div>
       

    </section >
    </div>
  )
}

export default Admin
