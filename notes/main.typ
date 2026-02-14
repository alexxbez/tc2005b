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

== Necesidad

El objetivo principal es fortalecer la relación con su comunidad, e incrementar la lealtad de los consumidores. La experiencia del cliente es muy importante. 

== Módulos

=== Menú

Debe de ser muy customizable, dependiendo de lo que quiero y que le quiero poner el menu cambia. Yo puedo armar mi propia crepa. Incluso manejar toppings o ingredientes de temporada. Debe de haber dos modelos de menu de crepas

- Arma tu crepa
- Crepas predefinidas que pueden ser modificadas

Proveen cafe, crepas, y waffles. 

=== Administración

Poder modificar precios, ingredientes, usuarios, de temporada, horarios de atención, 

=== Experiencia

Primero era un modelo _to go_, pero no funcionaba tan bien. Ahora funciona como un restaurante, llegan, menus, comandean. 

Si le gustaría poder educar a su cliente a poder ordenar por medio de una aplicación.

Son mayormente mujeres, y si son hombres son es porque vienen con su pareja. Es en un casona histórica de Mazatlán. 

No quiere cambiar su tipo de venta. Hay un prepa cerca y muchos van, por lo que estaría bien que los chavos puedan utilizarlo. No se quiere alejar del cliente, se quiere acercar por medio de la aplicación. 

Saber del cliente, saber su nombre, si se fue de viaje, tener ese acercamiento con el cliente y la aplicación debe poder complementar eso. 

Pedidos caen a un sistema que hace un sonidito especial, y manualmente se ingresa a la comanda. Tener una ipad a full volumen para reconocer que es del sistema. Sería bien tener un pedido que sepa quien estaba recibiendo esas comandas para saber si hubo algún error. 

=== Diseño

Girly, enfocado a la mujer. Pero, fácil de usar y amigable a los hombres. 

=== Lealtad 

Tienen una tarjetita que va puntuando. Llevar el control de saber que consume, invitarlo a volverlo a consumir. Se tiene que tener información para poder dar recomendaciones y mensajes estratégicos. Tiene que ser personalizado, por ejemplo descuentos en cumpleaños. En consumo de x cantidad puedes participar en rifas, etc. 

=== Métricas

Poque no se mueven algunas crepas. De dinero no se necesita mucho. Se enfoca más en la visita del cliente, si se la pasó bien, etc.

== Preguntas

- No me queda muy claro a que se refieren con un portal administrativo.
- Que tipo de recompesa quieren ofrecer, puntos, descuentos, productos gratis
- La idea es que hayan membresias
- El menu cambia segun horario

== Notas 

Va a haber muchas oportunides para conectar con terceros. Apple pay, google wallet, whatsapp.


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

*Question*: How relevant is it nowadays the PMBOK and are big companies actually using it?

== Addendum

- The people *interested* in the project are those who benefit and are affected by it.
- *Project agreement* is the document that formalises what the goals, scope and overall things that will be done in the project, which includes the time. It must also outline what the project will contain and what it will not.

= Information Systems

== An Introduction

#blockquote[An information system is defined as a set of interrelated components that compile, process, store and distribute information with the goal of decision taking and control over organization.]

=== Definitions

- *Data:* Is the symbolic representation of an attribute or characteristic of an entity. It does not have semantic meaning but may be conveniently processed into a more valueable thing.

- *Information:* Is an organized set of data that has been processed and thus has semantic meaning.

- *Input:* Is the information (data?) produced by the user. An input also can be produced by networks, etc.

- *Processing:* Are the actions that take an entry and generate useful information for the user.

- *Output:* Is the information that the computer will show to the user.

- *Feedback:* Is the added value that allows users to take actions.

=== Architecture

It is divided in mainly five levels (types), each one with a specific user in mind.

+ *Transaction Processing System (TPS):* Help in the daily activities of a enterprise. They are the heart of the information system. It comprises the data collection, data manipulation, storage, and report production. 

  Its goal is to process data, be exact and correct, mantain data integrity, produce oportune reports and documents, and overall improve laboral efficiency. It, thus, has a big volume I/O, needs high storage capabilities, and impacts a high number of user (specially when there is an error and everyone is stroke). 

  A transaction means sort of CRUD, create, recover, update and delete information. There are three processing types:

  - In line: In the moment as it arrives, though it does not matter if it lags behind (register user).
  - In batch: Waits a bit to gather up and then processes.
  - Realtime: Processes instantly as it arrives, where the time is critical (air traffic).

+ *Office Automation Systems (OAS):* Provide help for daily activities to increase employee efficiency of those who work with the information (e.g. word processors, email, schedules, etc.).
  
  *Knowledge Work Systems (KWS):* Provide help for specialized employees in the creation and integration of new knowledge for the institution, for instance software that aids architects in blueprint design.

+ *Management Information Systems (MIS):* A collection of people, procedures, databases, and devices needed to display information to the managers and decision takers so that they may achieve the objectives. They seek to show a general vision of how things look and how and which operations take place. 

  These systems produce reports, which may be scheduled, demanded or exceptional (when a critical situation creates the need).

  *Decision Support Systems:* It is similar to a MIS, but its purpose is to take decisions regarding specific problems, semi-structured problems or non-structured ones. It also gathers information from many places, but it must also be able to perform complex and sophisticaded analysis using statistical packages. It must also be visual. A DSS serves as a _what if_ visualizer, allowing the user to see the impact of hypothetical cases. 

+ *Group Decision Support Systems (GDSS):*  This system aids group decision taking. Its design is special, as it must encourage creative thinking and effective communication. It must also be easy to learn and use, while also being flexible enough to acommodate for the different kinds of people. It should also have some degree of anonymity in order for to avoid source bias.

  *Expert Systems (ES):* A system that acts as a human expert in certain field or area. It helps identifying issues, predicting future events and aiding in the design of new products.

+ *Executive Information Systems (EIS):* Encompasses all critical information that influences decision taking. It aids non structured decision taking with KPIs graphicly. It uses quality information, reduced use of the keyboard, secure access, fast response time, remote access and perfect fitted disign.
