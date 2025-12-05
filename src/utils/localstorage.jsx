


const data=[
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Prepare Sales Report",
        "description": "Generate the weekly sales report and submit by Friday.",
        "active": true,
        "newTask": true,
        "complete": false,
        "taskDate": "2025-12-05",
        "category": "Reporting"
      },
      {
        "title": "Update Client Database",
        "description": "Add new client entries and update contact details.",
        "active": false,
        "newTask": false,
        "complete": true,
        "taskDate": "2025-12-03",
        "category": "Data Entry"
      },
      {
        "title": "Team Meeting",
        "description": "Attend the monthly performance meeting.",
        "active": false,
        "newTask": true,
        "complete": false,
        "taskDate": "2025-12-07",
        "category": "Meetings"
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Design Homepage",
        "description": "Work on UI improvements for the homepage.",
        "active": true,
        "newTask": true,
        "complete": false,
        "taskDate": "2025-12-05",
        "category": "Design"
      },
      {
        "title": "Fix Navbar Bug",
        "description": "Resolve the navbar dropdown issue on mobile screens.",
        "active": false,
        "newTask": false,
        "complete": true,
        "taskDate": "2025-12-01",
        "category": "Development"
      },
      {
        "title": "Client Review Call",
        "description": "Discuss UI wireframes with the client.",
        "active": false,
        "newTask": true,
        "complete": false,
        "taskDate": "2025-12-06",
        "category": "Meetings"
      },
      {
        "title": "Optimize Images",
        "description": "Compress images for better loading speed.",
        "active": true,
        "newTask": false,
        "complete": false,
        "taskDate": "2025-12-04",
        "category": "Performance"
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Test Login API",
        "description": "Check for validation errors and response codes.",
        "active": true,
        "newTask": true,
        "complete": false,
        "taskDate": "2025-12-05",
        "category": "Testing"
      },
      {
        "title": "Write Unit Tests",
        "description": "Add unit tests for authentication module.",
        "active": false,
        "newTask": false,
        "complete": true,
        "taskDate": "2025-12-02",
        "category": "Development"
      },
      {
        "title": "Bug Tracking",
        "description": "Move completed bugs to the resolved board.",
        "active": false,
        "newTask": false,
        "complete": true,
        "taskDate": "2025-12-03",
        "category": "Management"
      }
    ]
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Content Writing",
        "description": "Write the product description for new features.",
        "active": true,
        "newTask": true,
        "complete": false,
        "taskDate": "2025-12-05",
        "category": "Writing"
      },
      {
        "title": "Social Media Post",
        "description": "Create a weekly engagement post for LinkedIn.",
        "active": false,
        "newTask": false,
        "complete": true,
        "taskDate": "2025-12-04",
        "category": "Marketing"
      },
      {
        "title": "SEO Update",
        "description": "Optimize meta tags for the landing page.",
        "active": false,
        "newTask": true,
        "complete": false,
        "taskDate": "2025-12-07",
        "category": "SEO"
      }
    ]
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Inventory Check",
        "description": "Check stock levels and update the inventory sheet.",
        "active": true,
        "newTask": true,
        "complete": false,
        "taskDate": "2025-12-05",
        "category": "Inventory"
      },
      {
        "title": "Supplier Call",
        "description": "Discuss delivery status with suppliers.",
        "active": false,
        "newTask": false,
        "complete": true,
        "taskDate": "2025-12-03",
        "category": "Communication"
      },
      {
        "title": "Warehouse Update",
        "description": "Rearrange stock for easy access.",
        "active": true,
        "newTask": false,
        "complete": false,
        "taskDate": "2025-12-04",
        "category": "Logistics"
      },
      {
        "title": "Safety Check",
        "description": "Inspect equipment safety and report issues.",
        "active": false,
        "newTask": true,
        "complete": false,
        "taskDate": "2025-12-06",
        "category": "Safety"
      }
    ]
  }
]
const adminData=[
    {
  "id": 1,
  "email": "admin@example.com",
  "password": "123"
}

]
export const setupLocalstorage=()=>{
    localStorage.setItem("employees",JSON.stringify(data));
    localStorage.setItem("admin",JSON.stringify(adminData));
}
export const getLocalstorageData=()=>{
    const employees=JSON.parse(localStorage.getItem("employees"));
    const admin=JSON.parse(localStorage.getItem("admin"));
    return {employees,admin};
}