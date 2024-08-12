import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar';
import Loader from 'react-loaders';
import './index.scss'

const ProjectsLayout = () => {
    return (
        <div>
            <Sidebar />
            <div className="projects-container">
                <Outlet />
            </div>
        </div>
    );
};

export default ProjectsLayout;
