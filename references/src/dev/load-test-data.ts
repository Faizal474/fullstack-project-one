import { connectClient, stopClient } from "../server/db";

async function main() {
  const client = await connectClient();

  await client.collection("certifications").deleteMany({});

  const resp = await client.collection("certifications").insertMany([
    {
      id: "fullstack-developer-certification",
      categoryName: "Software Development",
      programmeName: "FullStack Developer Certification",
      description: `
This is for fullstack developer certification. This programme includes frontend, backend, database, devops 
and many more modules that teaches students everything they need to build a fully functional webapplication end to end.
      `,
      courses: [
        {
          id: "git-essential-training",
          name: "Git Essential Training",
          timestamp: new Date(),
        },
        {
          id: "rest-apis",
          name: "REST APIs",
          timestamp: new Date(),
        },
      ],
    },
    {
      id: "frontend-developer-certification",
      categoryName: "Software Development",
      programmeName:
        "Frontend Developer Certification",
      description: `
Frontend Developer Certification
      `,
      courses: [],
    },
    {
      id: "backend-developer-certification",
      categoryName: "Software Development",
      programmeName:
        "Backend Developer Certification",
      description: `
Backend Developer Certification
      `,
      courses: [],
    },
    {
      id: "devops-engineer-certification",
      categoryName: "DevOps",
      programmeName:
        "DevOps Engineer Certification",
      description: `
DevOps Engineer Certification
      `,
      courses: [],
    },
  ]);

  console.info("Inserted Certification Programmes:", resp.insertedCount);

  stopClient();
}

main();
