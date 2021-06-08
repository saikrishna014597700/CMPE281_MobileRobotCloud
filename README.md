# CMPE281_MobileRobotCloud
A Cloud-Based Service Platform for Mobile Robotics


Since many mobile robots are used to support diverse edge-based robot services and operations, there is an urgent need in building a cloud-based service platform to support diverse remote robot service functions, including online remote configuration, control, tracking and monitoring. Beside the cloud platform needs to provide essential user account services, including user account management, user service management, and billing. In addition, the cloud service platform must support data communications between the server in a cloud and edge-based mobile robots whenever they are active in services.
 
MRC - Project :

MRC system  supports the following types of users:
-	Public MRC users – They are the client users for mobile robots, which are connected to a MRC cloud to support remote services.

-	System administration service staff – They are the system administration service staff at the back end. They are conduct remote online tracking and monitoring for mobile disinfection robots.

Componenets:

-	Component #1 – Edge-based mobile robot 
– A simulated (or real robot) mobile robot which supports the following functions:
(a)	A user interface – It provides the interactions between a client and a robot (or a simulated robot) as an online interface or mobile robot app.
(b)	A simulated robot (or a real toy robot) with a state-based process which supports the robot configuration, control operation, and state tracking.
(c)	Edge communication between a robot and the back-end server in a cloud.

-	Component #2 – Databased management component(s)
o	This is a database management component, which stores, updates, and managements diverse connected robot information, and service records. Two types of databases must be used here: a) SQL-based DB of user accounts and registered robots, b) NOSQL DB supporting diverse service data and records from robots.

-	Component #3 – Remote online robot tracking and controlling
o	This provides remote online robot tracking and controlling the status of remote robots, including its operation states, such as service states, including connected, operated, stopped, inactive, and active.

-	Component #4 – User service management
- This component supports user service management, including user account, service account, and billing.

-	Online system dashboard – This component provides a dashboard with online statistics information using diverse diagrams in the following areas:
o	No. of registered users
o	No. of registered robots and actively connected robots
o	No. of service operations for robots
o	State distribution of diverse registered robots
