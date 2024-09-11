import React from 'react'
import './Education.css'

function Education() {
    return (
        <>
            <div id='education'>Education</div>

            <div className='educontainer'>

                <div class="education-date">2021-22</div><br />
                <div class="education-item">
                    <div class="educontent">
                        <p className='std'>BCA First Year</p>
                        <p className='sch'>C. B. PATEL COMPUTER COLLEGE</p>
                        <p className='sch'>YGPA :- 7.26 </p>
                    </div>
                </div>

                <div class="education-date">2022-23</div><br />
                <div class="education-item">
                    <div class="educontent">
                        <p className='std'>BCA Second Year</p>
                        <p className='sch'>C. B. PATEL COMPUTER COLLEGE</p>
                        <p className='sch'>YGPA :- 5.90 </p>
                    </div>
                </div>

                <div class="education-date">2023-24</div><br />
                <div class="education-item">
                    <div class="educontent">
                        <p className='std'>BCA Third Year</p>
                        <p className='sch'>C. B. PATEL COMPUTER COLLEGE</p>
                        <p className='sch'>CGPA :- 64.90 </p>
                    </div>
                </div>

                <div class="education-date">2024-25</div><br />
                <div class="education-item">
                    <div class="educontent">
                        <p className='std'>MCA First Year</p>
                        <p className='sch'>Lovely Professional University</p>
                        <p className='sch'>Currently Study </p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Education