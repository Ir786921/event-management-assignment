# Event Management App

A simple and aesthetic event management app built with **Next.js (App Router)**, **TailwindCSS**, and part of the **Next-Forge Turbo template** monorepo.

---
## How to Run

1. Clone the repository and navigate to the project folder:
```bash
   git clone https://github.com/Ir786921/event-management-assignment
   cd apps/event-management
   
   ```

2. Install dependencies using pnpm:
  - pnpm install

3. Start the development server:
  - pnpm dev

4. Open in browser:
  - http://localhost:3000/events 


## Path of the Page
 - apps/event-management/src/app/events
 - Main page: /events  

## Screenshots 

 ### Starting Point
  ![start](./apps/docs/images/Screenshot (481).png)
 
 ### Add Event
 ![AddEvent](./apps/docs/images/Screenshot (483).png)

 ### Delete Event
 ![DeleteEvent](./apps/docs/images/Screenshot (484).png)

 ### Search Event
 ![SearchEvent](./apps/docs/images/Screenshot (486).png)



## Notes / Assumptions
- The project is built inside a monorepo using the Next-Forge Turbo template (apps/event-management).
- Assumes Node.js (>=18) and pnpm are installed globally.
- The app is scaffolded with Next.js App Router + TypeScript + TailwindCSS.
- The /events page displays a list of events with options to delete events.
- State management is currently handled with useState. This can be extended with Zustand if the project grows.
- Events are persisted in localStorage so that data is retained across page refreshes.
- Minimal styling applied with Tailwind for aesthetic UI – can be extended/customized.
- Works locally; deployment steps are not included.

## Tech Stack
- Next.js (App Router)
- TailwindCSS
- pnpm
- Turborepo