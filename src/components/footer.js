import react from 'react'

const Footer = () => {
    return(
        <div className = 'footer'>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">3 year plan</th>
                    <th scope="col">Primary Goal</th>
                    <th scope="col">Secondary</th>
                    <th scope="col">Third</th>
                </tr>
            </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Hired</td>
                <td>Master React</td>
                <td>Learn all tech used in the company</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Have an impact in the team</td>
                <td>Learn Swift</td>
                <td>Community involvement</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Become the "go to" guy</td>
                <td>IOS development</td>
                <td>Mentor someone</td>
            </tr>
        </tbody>
        </table>

         </div>
    )
}

export default Footer
