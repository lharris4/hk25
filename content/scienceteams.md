---
titel: Science in Hamburg
header_menu: false
---

# Science Teams

Across the different nodes participants will be setting up science teams. These teams will address specific topics as proposed by the team lead, and attempt to engage others in joint analysis. These are open for participants at all nodes to join. 

Teams are given a shortname based on the initials of the lead PI as shown in the example below. Each will also have an associated repo on github with the same shortname.  The repo  will serve as the primary basis for communication among team members.  Mattermost channels, markdown pads, and video-conference links may also serve as supplemental forms of communications, as indicated on the repo README.md

## Joint EarthCARE Analysis (hk25-ec1)

[EarthCARE](https://earth.esa.int/eogateway/missions/earthcare) is a satellite, developed by ESA, JAXA and NICT and is the sixth satellite choosen as part of ESA's Earth Explorer Programme.   It was launched on 28 May 2024, and be completing its first year in orbit at the time of the Hackathon.  It has unusual capabilities for measuring clouds, aerosols, and radiation.

In this team we will analyze both EarthCARE data and the participating models along virtual EarthCARE swaths, with an initial focus on tropical deep convection as analyzed by EarthCARE, aircraft, ships and ground stations during the [ORCESTRA campaign](http://orcestra-campaign.org/), i.e., over the Tropical Atlantic in the time-period between 10 August and 30 September.

**Coordination**: Bjorn Stevens (bjorn.stevens@mpimet.mpg.de)

#### Sketch of initial activities:
* extract model output along selected orbit frames
* post-process output using model simulators
* extract analagous EarthCARE frames and data from reanalyses.
* perform composit analysis of various quantities.

## Energetics of Tropical Rainbelts  (hk25-tr1)

Global km-scale grids permits an explicit representation of convective storms and the processes they entails. Over the tropical ocean, precipitation occurs in a variety of environments. Precipitating regions could be related to strong sea surface temperature gradients and a bottom-heavy circulation (e.g., Eastern Pacific) or a top-heavy circulation, weak SST gradients, and light winds (e.g., Western Pacific). Due to the diversity of pathways in which precipitation occurs, we will analyze how convection is represented across the tropical oceans in the different participating km-scale models using an energetic-moisture framework.

**Coordination**: Hans Segura Cajachagua (hans.segura@mpimet.mpg.de)

#### Skecth of initial activities
* identify the tropical rainbelt
* calculate the entropy forcing and the net precipitation flux at the surface
* compute the type of circulation (top- or bottom-heavy) in the tropical rainbelt
* extract the spectrum of convective coupled equatorial waves 

## Precipitation over ice-sheets (hk25-is1)

Mass loss of the Greenland and Antarctic ice sheets is an important contributor for current and future sea level rise. To properly drive the surface mass balance calculations in ice sheet models, a realistic simulation of precipitation and surface temperatures is crucial. Regional modeling studies suggest that higher resolution of the atmospheric models driving ice sheet models improves the simulation of processes occurring at the steep margins of the ice sheets, making km-scale global models a promising tool for future coupled atmosphere-ocean-ice sheet modelling as planned for example in the [TerraDT](https://terradt.eu/) project.

In this team we want to compare the simulated surface meteorology over Greenland and Antarctica for participating models and with reanalysis data and observations to assess how suited the models are to drive ice-sheet models.

**Coordination**: Hauke Schmidt (hauke.schmidt@mpimet.mpg.de)

#### Sketch of initial activities:
-	extract model output for the Greenland and Antarctic ice sheets
-	produce precipitation and temperature maps
-	compare annual cycles for regional means and selected locations
