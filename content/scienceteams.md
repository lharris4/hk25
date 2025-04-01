---
titel: Science in Hamburg
header_menu: false
---

# Science Teams

Across the different nodes participants will be setting up science teams. These teams will address specific topics as proposed by the team lead, and attempt to engage others in joint analysis. These are open for participants at all nodes to join. 

Teams are given a shortname based on the initials of the lead PI as shown in the example below. Each will also have an associated repo on github with the same shortname.  The repo  will serve as the primary basis for communication among team members.  Mattermost channels, markdown pads, and video-conference links may also serve as supplemental forms of communications, as indicated on the repo README.md

## Joint EarthCARE Analysis (hk25-st1)

[EarthCARE](https://earth.esa.int/eogateway/missions/earthcare) is a satellite, developed by ESA, JAXA and NICT and is the sixth satellite choosen as part of ESA's Earth Explorer Programme.   It was launched on 28 May 2024, and be completing its first year in orbit at the time of the Hackathon.  It has unusual capabilities for measuring clouds, aerosols, and radiation.

In this team we will analyze both EarthCARE data and the participating models along virtual EarthCARE swaths, with an initial focus on tropical deep convection as analyzed by EarthCARE, aircraft, ships and ground stations during the [ORCESTRA campaign](http://orcestra-campaign.org/), i.e., over the Tropical Atlantic in the time-period between 10 August and 30 September.

**Coordination**: Bjorn Stevens (bjorn.stevens@mpimet.mpg.de)

#### Sketch of initial activities:
* extract model output along selected orbit frames
* post-process output using model simulators
* extract analagous EarthCARE frames and data from reanalyses.
* perform composit analysis of various quantities.


## Joint Analysis of triggering mechanisms of deep convection over tropical oceans (hk25-ct)
Convective precipitation within the tropical rainbelts is primarily driven by small-scale convective storms and especially mesoscale convective systems (MCSs).
In order to better understand the tropical rainbelts as a whole, it is therefore important to better understand the details of individual convective systems.
An important aspect of individual convective systems is their triggering.
Limited observations and idealized modeling suggest that SST-driven mesoscale boundary layer wind convergence may play a key role in triggering deep convection over tropical oceans, but details are still poorly understood.
Km-scale models, which allow an explicit representation of deep convection, are a promising tool to overcome this limited understanding.

In this team, we will investigate how MCSs over tropical oceans are triggered in the different km-scale models participating in this hackathon.
A special focus will be on the relevance of mesoscale surface wind convergence for convective triggering.
If possible, we will also look at how mesoscale surface wind convergence depends on mesoscale SST properties.


**Coordination**: Henning Franke (henning.franke@mpimet.mpg.de)

* MCS tracking (together with science teams from other nodes)
* Determine time and location of MCS triggering from MCS tracking results
* Calculate mesoscale surface wind convergence at MCS triggering locations
* For coupled simulations: calculate SST gradients and Laplacians. Could still make sense for uncoupled simulations in case SST is prescribed with a high temporal frequency (well below monthly)