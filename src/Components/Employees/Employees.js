import MichaelScott from '../../Assets/EmployeeImages/MichaelScott.png';
import PamBeesly from '../../Assets/EmployeeImages/PamBeesly.png';
import DwightShrute from '../../Assets/EmployeeImages/DwightShrute.png';
import JimHalpert from '../../Assets/EmployeeImages/JimHalpert.png';


import './Employees.css';

function Employees(){
    const employees = [
        {
            id: 1,
            image: MichaelScott,
            quote: '"People say I am the best boss."',
            name: "Michael Scott"
        },
        {
            id: 2,
            image: DwightShrute,
            quote: '"Whenever I’m about to do something, I think, ‘Would an idiot do that?’ And if they would, I do not do that thing."',
            name: "Dwight Schrute"
        },
        {
            id: 3,
            image: JimHalpert,
            quote: '"From time to time, I send Dwight faxes… from himself… from the future."',
            name: "Jim Halpert"
        },
        {
            id: 4,
            image: PamBeesly,
            quote: '"There’s a lot of beauty in ordinary things. Isn’t that kind of the point?"',
            name: "Pam Beesly"
        },
        {
            id: 5,
            image: PamBeesly,
            quote: '"I Don\'t Need A Judge To Tell Me To Keep My Community Clean"',
            name: "Ryan Howard"
        },
        {
            id: 6,
            image: PamBeesly,
            quote: '"There’s a lot of beauty in ordinary things. Isn’t that kind of the point?"',
            name: "Andy Bernard"
        },
        {
            id: 7,
            image: PamBeesly,
            quote: '"There’s a lot of beauty in ordinary things. Isn’t that kind of the point?"',
            name: "Stanley Hudson"
        },
        {
            id: 8,
            image: PamBeesly,
            quote: '"There’s a lot of beauty in ordinary things. Isn’t that kind of the point?"',
            name: "Kevin Malone"
        },
        {
            id: 9,
            image: PamBeesly,
            quote: '"There’s a lot of beauty in ordinary things. Isn’t that kind of the point?"',
            name: "Meredith Palmer"
        },
        {
            id: 10,
            image: PamBeesly,
            quote: '"There’s a lot of beauty in ordinary things. Isn’t that kind of the point?"',
            name: "Angela Martin"
        },
    ];

    return(
        <div className="employeeContainer">
            <div style={{ height: '2rem' }} />
            {employees.map(employee => (
                <div key={employee.id} className="employeeListing">
                    <div className="employeeImage">
                        <img 
                            src={employee.image} 
                            alt={employee.name}
                        />
                    </div>
                    <div className="employeeInfo">
                        <h2 style={{ 
                            margin: '0'
                        }}>
                            {employee.name}
                        </h2>
                        <h2 style={{ 
                            fontStyle: 'italic',
                            margin: '0 0 10px 0'
                        }}>
                            {employee.quote}
                        </h2>
                    </div>
                </div>
            ))}
            <div style={{ height: '2rem' }} />
        </div>
    )
}

export default Employees;