import { FcDataSheet } from "react-icons/fc";
import MenuItem from "../MenuItem/MenuItem";
import { RiSecurePaymentLine } from "react-icons/ri";

 
const EmployeeMenu = () => {
    return (
        <div>
            <MenuItem label='Work Sheet' address='work-sheet' icon={FcDataSheet} /> 
            <MenuItem label='Payment History' address='payment-history' icon={RiSecurePaymentLine} /> 
        </div>
    );
};

export default EmployeeMenu;