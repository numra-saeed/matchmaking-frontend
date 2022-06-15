import React, { useEffect, useState } from 'react';
import './Dashboard-Admin.css';
import profile from '../../images/image.png';
import { sendRequestForProjects } from '../../apis/Api';
import { IProject } from '../../interfaces/interfaces';

const DashboardAdmin = () => {

    const [projects, setProjects] = useState<IProject[]>([]);

    useEffect(() => {
        getProjectsAndResources();

        return () => {
            console.log("Dashboard Useeffect Ended");
        }

    }, []);

    const getProjectsAndResources = async () => {
        try {
            const result = await sendRequestForProjects();
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
                                        <img src={data.image} className="project-image" />
                                    </a>

                                    <div className="project-content">
                                        <h2>{data.name}</h2>
                                        <p>{data.desc}</p>
                                        <span><b>Typescript, React and Redux, NodeJS, GraphQL, FHIR, MongoDB</b></span>
                                        <div className='technical-resources'>
                                            {
                                                data.resources.map((resource, index) => {
                                                    return (
                                                        <div className="technical-resources-wrapper" key={index}>
                                                            <div>
                                                                <div>
                                                                    <img src={profile} className="resource-image" />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <h4 className="resource-header">{resource.name}</h4>
                                                                <div className="resource-designation">
                                                                    {resource.designation}
                                                                </div>
                                                                <span className='button-span'><button className="button">Send Invite</button></span>
                                                            </div>
                                                        </div>
                                                    );
                                                })
                                            }


                                        </div>

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

export default DashboardAdmin;