export const projects = [
  {
    id: 1,
    title: "Kubernetes Nginx Deployment",
    description:
      "Deployed an Nginx application on Kubernetes using Deployments and Services with Minikube. Implemented rolling updates and exposed the application using NodePort.",

    technologies: [
      "Kubernetes",
      "Docker",
      "Nginx",
      "Minikube",
    ],

    github: "https://github.com/vivekbuildsai/minikube_projects",

    demo: "",

    featured: true,
  },

  {
    id: 2,
    title: "Three Tier Application on Kubernetes",

    description:
      "Containerized a React frontend, backend API and MySQL database, then deployed them to Kubernetes with persistent storage and service networking.",

    technologies: [
      "React",
      "Docker",
      "MySQL",
      "Kubernetes",
      "PVC",
    ],

    github: "https://github.com/vivekbuildsai/minikube_projects",

    demo: "",

    featured: true,
  },
];
