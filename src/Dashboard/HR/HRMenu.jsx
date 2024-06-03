import { FaList } from "react-icons/fa6";
import MenuItem from "../MenuItem/MenuItem";
import { GiGraspingSlug, GiProgression } from "react-icons/gi";

 
const HRMenu = () => {
    return (
        <div>
            <MenuItem label='Employee List' address='/dashboard/employee-list' icon={FaList} />
            {/* <MenuItem label='Details Slug' address='/dashboard/details' icon={GiGraspingSlug} /> */}
            <MenuItem label='Progress' address='/dashboard/progress' icon={GiProgression} />
        </div>
    );
};

export default HRMenu;