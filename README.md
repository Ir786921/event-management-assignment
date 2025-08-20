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
 <img width="1920" height="1080" alt="Screenshot (481)" src="https://github.com/user-attachments/assets/39bea7e2-7c28-466f-8858-61dc958a84ab" />

 ### Add Event
<img width="1920" height="1080" alt="Screenshot (483)" src="https://github.com/user-attachments/assets/5bd224aa-ac8b-4f72-ac68-6cc65375d24f" />

 ### Delete Event
<img width="1920" height="1080" alt="Screenshot (484)" src="https://github.com/user-attachments/assets/a026c111-fed9-44ca-b705-936ff25f4ddc" />

 ### Search Event
<img width="1920" height="1080" alt="Screenshot (486)" src="https://github.com/user-attachments/assets/055f81cf-c8dc-4cd2-bfc4-121992ae0197" />


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
