#import "@preview/ilm:2.0.0": *

#set text(lang: "en")

#show: ilm.with(
  title: [Software Construction and Decision Making],
  authors: "Alejandro Benítez",
  date: datetime(year: 2026, month: 02, day: 9),
  abstract: [
    Class Notes
  ],
  preface: [
    #align(center + horizon)[
      who knows what will be here
    ]
  ],
  figure-index: (enabled: true),
  table-index: (enabled: true),
  listing-index: (enabled: true),

  raw-text: (
    font: ("JetBrainsMono NF"),
  ),
)

= Socioformadores

== Mareé

*Mauricio Hernández Siles* (442 443 5874), Joel, María. 
\@mareecrepe

Crepería. Experiencia completa. 

Proyecto en forlatecer la relacion con su comunidad. Incrementar la lealtad que tienen. 

- Sistema de royalty para clientes. Mobile. Tarjeta digital.
- Menu digital, personalizado. Horarios y disponibilidad. Futuro, pedir comida en la aplicación.
- Portal administrativo.
- Notificaciones whatsapp, programar mensajes.
- Adaptible y disponible en los telefonos.

Quieren una solución integral personal. Evitar limitantes.

Apoyo con el diseño.

== PPG

*Ariel Lugo* *Erick Ortega* 

Pinturas. 

Sistema de gestión de artículos y reservas.

- administrar articulos con caracteristicas basicas
- visualizar el catalogo disponible
- reservas de articulos y gestionarlas (correo, folios)
- tiempos
- carrito
- contidad y productos, nada mas

reqs

- responsivo
- seguridad basica
- envio de correos
- generacion de folios

== Change

*Bernardo Laing* (442 249 7177)

Impacto social. Peticiones, campañas.

Petición -> comparte -> responder o tomar decisiones -> termino / declara victoria

Problema: informacion dispersa

proyectos, avances, logros, trabajo diario que deberia ser compartida no lo es
jira, *slack*, confluence y google docs

con esa informacion se dan a conocer los logros, se toman desiciones y se ejecutan evaluaciones (personal, muy importante). se recopila la informacion de cada integrante para las evaluaciones

se pierden horas de trabajo buscando esta informacion, una o dos horas por persona

gestion de informacion

- gestionar usuarios y equipos
- bitacora de avances (registro diario de avances, tareas) (plataforma facil)
- gestion de r
- compartir informacion

consitencia con su forma de trabajo

talleres

= Project Management

== An Introduction

The course seeks to teach techniques and knowledge for the efficient project management. It is mainly based on the Project Management Institute (PMI) and its research.

First it is important to realize that few are the projects that are successful. Only about 17\% of all projects can be considered successful. Even optimistic estimates only reach about 20 to 30\%. 

There are some points of suspicion, points which can give us insight into why projects fail so often. These are but some of them:

- Incomplete or changing specifications and requirements
- Lack of user involvement
- Not enough technical knowledge
- Inadequate use of methods and tools
- Unrealistic expectations

We can conclude the main reason is *weak project management*.

=== Projects and Project Management

But first let us define what a project even is. A project is a temporal effort in order to bring a product, service or result to life. This definition implicates three things: effort, which is the use of organized resources; time constrainss, for it must be completed at some point; and the product itself, which must be alive, functioning. 

Knowing this we might be able to answer, what is project management then? 

#blockquote[
  Project management is the exercise of knowledge, abilities, tools and techniques in the activities that comprise a project in order to meet the project requirements.
]

=== PMBOK

Now PMI, a non lucrative association, is the author and proprietary of the *PMBOK*, the most complete manual on project management. It establishes standards, it homogenizes training programs and even certificates individuals. And PMBOK is its Project Management Body of Knowledge, which, among other things, describes the environment wherein the projects will be developed, describes and organizes the project characteristics, describes the necessary knowledge to manage a project (divided into 9 areas), and establishes a shared vocabulary.

The PMBOK manages mainly 9 areas, namely:

- Project Integration Management
- Project Communication Management
- Project Scope Management
- Project Schedule Management
- Project Cost Management
- Project Quality Management
- Project Risk Management
- Project Resource Management
- Project Procurement Management

==== Project Integration Management

Includes the necessary processes to guarantee that the distinct elements of the project are well coordinated. It includes the development ofo the project plan, the execution of said plan, a control for the changes made. This is a recursive process. A plan is made, then executed and revised by the control. With the feedback from the control the plan is altered, then executed and so on. Once the control gives a green light the process is terminated.

==== Project Communication Management

It deals with how to generate, collect, distribute, store, recover and delete the projects information.

==== Project Scope Management

How to determine if the projects contains and only contains the necessary work to execute the project. How to control de use of resources and execution of activities so that the project may have the exact desired characteristics and functionalities. 

==== Project Schedule and Cost Management

How to determine the order and sequence of activities to deliver in time. How to assign resources so that the project stays within budget. How to use the resources, time and money. 

==== Project Quality and Risk Management

Quality deals with how to satisfy the project necessities by the continued improvement of processes. Risk deals with how to identify events that are out of the project control, and how to act accordingly.

==== Project Resource and Procurement Management

Resource means how to organanize and adminitrate the team for the project, balancingn participaation, desicion taking and commitment. Procurement means how to adquire the goods and services required by the project, as well as knowing how to select from providers.

== A Review on Objectives

Any project must divided in objectives. But first it is important to identify the necessity or problem, the *pain points* of the client. Only afterwards can the objectives be identified and detailed.

- Objective (usually in text)
- Functional  (usecases diagrams)
- Non functional (quality attributes)
- Information (catalogues, fields, relations)
- Business rules
- Interface
  - User GUI
  - Communication (between other systems)

Extensible is a system that is able to grow by implementing more. Scalable is that the system grows just by inputing more computer power.
