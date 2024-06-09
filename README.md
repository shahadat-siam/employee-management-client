## TalentIQ

## Live Site URL: https://talentiq-2af8f.web.app/

## Features and Characteristics: 

### User Authentication and Authorization: 
- Implement role-based authentication and authorization to ensure secure access to different routes 
   (admin, HR, employee).
- Each user role will have access to specific features based on their permissions.

### Role and Permission Management: 
- Admins can define and manage user roles (admin, HR, employee) and assign specific permissions to each role.
- This ensures granular control over who can access and perform certain actions within the system.

### Employee Management: 
- CRUD Operations: Admins and HR can create, read, update, and delete employee records.
- Profile Management: Employees can view and update their profiles, including personal information, contact details, and job-related information.

### Task Management: 
- Employees can add tasks by selecting a task type, entering hours worked, and choosing a date. The submitted tasks are displayed in a table.
- Employees can view, edit, or delete their submitted tasks.

### Payment History: 
- Employees can view their monthly salary payment history, including details such as month, amount, and transaction ID.
- The payment history table supports pagination or infinite scrolling for easy navigation through records if more than five rows exist.

### Employee Information Table: 
- Display all employee details in a well-formatted table.
- Columns include Name, Email, Verified Status, Bank Account, Salary, Pay, and Details.

### Pay Button with Modal:
- The Pay button opens a modal pre-filled with the employee's salary.
- The modal includes input fields for Month and Year.
- HR can pay only verified employees (unverified employees' Pay button is disabled).
- On clicking the Pay button in the modal, the payment is processed and recorded in the database.

### Role Management:
- Admin can promote employees to HR by clicking the "Make HR" button, updating their role in the database and granting them access to HR-specific routes while restricting access to employee-specific routes.
- Admin can fire employees or HRs by clicking the "Fire" button, opening a confirmation modal, and upon confirmation, disabling their account and preventing further logins.

### Salary Adjustment:
- Admin can adjust the salary of employees and HRs by clicking the "Adjust Salary" button, opening a modal to enter the new salary, and updating the salary information in the database upon confirmation.

### Here i have implemented a payment system 