import React, { useEffect, useState } from 'react';
import './Dashboard-User.css';
import profile from '../../images/image.png';
import { getProjectsForUsers } from '../../apis/Api';
import { IProject } from '../../interfaces/interfaces';

const DashboardUser = () => {

    const [projects, setProjects] = useState<IProject[]>([]);

    useEffect(() => {
        getProjects();

        return () => {
            console.log("Dashboard Useeffect Ended");
        }

    }, []);

    const getProjects = async () => {
        try {
            const result = await getProjectsForUsers();
            setProjects(result);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='dashboard'>
            {/* <input type="text" placeholder="Enter item to be searched" style={elementStyle} onChange={(e) => this.searchSpace(e)} />
            */}  <div className="project-wrapper">
                {
                    projects.map((data, index) => {
                        return (
                            <div key={index}>
                                <article className="project">

                                    <a href="">
                                        <img src={data.image} className="project-image-user" />
                                    </a>

                                    <div className="project-content">
                                        <h2>{data.name}</h2>
                                        <p>{data.desc}</p>
                                        <span><b>Typescript, React and Redux, NodeJS, GraphQL, FHIR, MongoDB</b></span>
                                        <span className='button-span-apply'><button className="button">Apply</button></span>
                                    </div>
                                </article>
                            </div>

                        )
                    })
                }
            </div>


        </div>
    );
};

export default DashboardUser;