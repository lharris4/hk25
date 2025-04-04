---
header_menu: false
---

# Science Teams

Across the different nodes participants will be setting up science teams. These teams will address specific topics as proposed by the team lead, and attempt to engage others in joint analysis. These are open for participants at all nodes to join. 

Teams are given an identifier following the pattern ‘hk25-[zy*n*]’. Each team will also have an associated repo on github with the same identifier. The repo will serve as the primary basis for communication among team members.  Mattermost channels, markdown pads, and video-conference links may also serve as supplemental forms of communications, as indicated on the README to which the identifiers link.

---
### Joint EarthCARE analysis ([hk25-ec1](https://github.com/digital-earths-global-hackathon/hk25-teams/tree/main/hk25-ec1))

[EarthCARE](https://earth.esa.int/eogateway/missions/earthcare) is a satellite, developed by ESA, JAXA and NICT and is the sixth satellite choosen as part of ESA's Earth Explorer Programme.   It was launched on 28 May 2024, and be completing its first year in orbit at the time of the Hackathon.  It has unusual capabilities for measuring clouds, aerosols, and radiation.

In this team we will analyze both EarthCARE data and the participating models along virtual EarthCARE swaths, with an initial focus on tropical deep convection as analyzed by EarthCARE, aircraft, ships and ground stations during the [ORCESTRA campaign](http://orcestra-campaign.org/), i.e., over the Tropical Atlantic in the time-period between 10 August and 30 September.

**Coordination**: Bjorn Stevens (bjorn.stevens@mpimet.mpg.de)

#### Sketch of initial activities:
* extract model output along selected orbit frames
* post-process output using model simulators
* extract analagous EarthCARE frames and data from reanalyses.
* perform composit analysis of various quantities.

---
### Energetics of tropical rainbelts ([hk25-tr1](https://github.com/digital-earths-global-hackathon/hk25-teams/tree/main/hk25-tr1))

Global km-scale grids permits an explicit representation of convective storms and the processes they entails. Over the tropical ocean, precipitation occurs in a variety of environments. Precipitating regions could be related to strong sea surface temperature gradients and a bottom-heavy circulation (e.g., Eastern Pacific) or a top-heavy circulation, weak SST gradients, and light winds (e.g., Western Pacific). Due to the diversity of pathways in which precipitation occurs, we will analyze how convection is represented across the tropical oceans in the different participating km-scale models using an energetic-moisture framework.

**Coordination**: Hans Segura Cajachagua (hans.segura@mpimet.mpg.de)

#### Sketch of initial activities
* identify the tropical rainbelt
* calculate the entropy forcing and the net precipitation flux at the surface
* compute the type of circulation (top- or bottom-heavy) in the tropical rainbelt
* extract the spectrum of convective coupled equatorial waves 

---
### Precipitation over ice-sheets ([hk25-is1](https://github.com/digital-earths-global-hackathon/hk25-teams/tree/main/hk25-is1))

Mass loss of the Greenland and Antarctic ice sheets is an important contributor for current and future sea level rise. To properly drive the surface mass balance calculations in ice sheet models, a realistic simulation of precipitation and surface temperatures is crucial. Regional modeling studies suggest that higher resolution of the atmospheric models driving ice sheet models improves the simulation of processes occurring at the steep margins of the ice sheets, making km-scale global models a promising tool for future coupled atmosphere-ocean-ice sheet modelling as planned for example in the [TerraDT](https://terradt.eu/) project.

In this team we want to compare the simulated surface meteorology over Greenland and Antarctica for participating models and with reanalysis data and observations to assess how suited the models are to drive ice-sheet models.

**Coordination**: Hauke Schmidt (hauke.schmidt@mpimet.mpg.de)

#### Sketch of initial activities:
*	extract model output for the Greenland and Antarctic ice sheets
*	produce precipitation and temperature maps
*	compare annual cycles for regional means and selected locations

---
### Triggering of deep convection ([hk25-ct](https://github.com/digital-earths-global-hackathon/hk25-teams/tree/main/hk25-ct))

Convective precipitation within the tropical rainbelts is primarily driven by convective storms.  To better understand the tropical rainbelts as a whole, we want to understand the details of individual convective systems.  An important aspect of individual convective systems is their triggering.  Limited observations and idealized modeling suggest that SST-driven mesoscale boundary layer wind convergence may play a key role in triggering deep convection over tropical oceans, but details are still poorly understood. Km-scale models, which allow an explicit representation of deep convection, are a promising tool to overcome this limited understanding.

In this team, we will test the hypothesis that MCSs over tropical oceans are triggered by mesoscale wind convergence. If possible, we will also look at how mesoscale surface wind convergence depends on mesoscale SST properties.

**Coordination**: Henning Franke (henning.franke@mpimet.mpg.de)

#### Sketch of initial activities
* MCS tracking (together with science teams from other nodes)
* Determine time and location of MCS triggering from MCS tracking results
* Calculate mesoscale surface wind convergence at MCS triggering locations
* Calculate SST gradients and Laplacian.

---

### MCS tracking ([hk25-mcs](https://github.com/digital-earths-global-hackathon/hk25-teams/tree/main/hk25-mcs))

Convective storms, especially those that develop into mesoscale convective systems (MCSs), play a crucial role in producing rainfall and hazardous weather across the globe. While recent studies have shown that DYAMOND models can capture certain aspects of tropical MCSs, such as their frequency and diurnal cycle, significant challenges remain. In particular, accurately representing the distribution of precipitation and its relationship with the surrounding environment continues to be a major hurdle ([Su et al. 2022](https://doi.org/10.2151/jmsj.2022-033); [Feng et al. 2023](https://doi.org/10.1029/2022GL102603); [Song et al. 2024](https://doi.org/10.1029/2024GL109945); [Feng et al. 2024](https://doi.org/10.22541/essoar.172405876.67413040/v1)).

Previous DYAMOND phases provided two 40-day simulation periods for summer and winter, limiting the statistical robustness of model evaluations. The WCRP Digital Earth Global Hackathon will extend these simulations to a full year using multiple global kilometer-scale models, creating an unprecedented opportunity to assess how well they capture the full spectrum of convective storms and extreme events. As part of this effort, we are organizing an MCS tracking activity to develop and apply new analysis tools, exchange insights, and strengthen collaborations within the broader atmospheric science community.

**Coordination**: Zhe Feng (zhe.feng@pnnl.gov)

#### Sketch of initial activities
- Follows MCSMIP protocol under [Tracking criteria](https://mcsmip.github.io/design/)
- Example notebook reading/remapping HEALPix data (link TBD)
- Standardize tracking output formats ([unify MCS mask files](https://github.com/WACCEM/MCSMIP-DYAMOND/blob/main/src/unify_mask_files.py))
- Example MCS mask files ([Globus link](https://app.globus.org/file-manager?destination_id=87909b37-fbcf-4735-a72e-1a406301a053&destination_path=%2Fsample_mcs_mask%2F&two_pane=true))
- Data sharing (upload instructions TBD)

---

### Shallow meridional circulations in the ITCZ (hk25-sh)

The intertropical convergence zone (ITCZ) in the eastern parts of the Pacific and Atlantic basins is dominated by bottom-heavy or shallow meridional circulations, with outflow observed at 2-4 km. In this team, we would like to understand the dynamical drivers of shallow meridional circulations as a function of the seasonal cycle using storm resolving simulations. We are interested in characterising the surface and free troposphere controls on the depth of the shallow circulations and testing the hypothesis that the circulation becomes more pronounced as the ITCZ moves poleward.

**Coordination**: Divya Sri Praturi (divya-sri.praturi@mpimet.mpg.de) and Marius Winkler (marius.winkler@mpimet.mpg.de)

#### Sketch of initial activities
* construct the meridional overturning circulation in the eastern Atlantic and Pacific ITCZ
* compute zonal and meridional momentum budgets across pressure levels
* determine the seasonal cycle of the depth of the outflow

---

### Mesoscale structure of stratocumulus clouds (hk25-sc)

Low-level clouds over subtropical oceans are important for the energy balance of the planet and climate sensitivity. Their properties and evolution crucially depend on small scale processes. A recent examination of their climatology ([Nowak et al. 2025](https://doi.org/10.1029/2024MS004340)) in two [NextGEMS](https://nextgems-h2020.eu/) global storm-resolving models indicated realistic covariability of stratocumulus and related environmental factors, and the vertical structure of the boundary layer. How is that possible without elaborated model tuning and on the grid which is too large to resolve large turbulent eddies? 

It was speculated that the km-scale grid allows to simulate mesoscale circulations which might be sufficient to crudely represent the radiation-turbulence-entrainment-flux feedback regulating the behavior of stratocumuli. We would like to test this hypothesis by inspecting the mesoscale patterns of cloudiness, circulation and precipitation in the models and check whether those patterns comply with the mechanisms proposed to explain the cellular cloud structures evident in observations (see e.g. [Comstock et al. 2005](https://doi.org/10.1175/JAS3567.1), [van Zanten and Stevens 2005](https://doi.org/10.1175/JAS3611.1), [Wood et al. 2011](https://doi.org/10.5194/acp-11-2341-2011)).

**Coordination**: Jakub Nowak (jakub.nowak@mpimet.mpg.de)

#### Sketch of initial activities
* Extract snapshots of subtropical stratocumulus fields
* Asses qualitatively whether the mesoscale cloud patterns are cellular
* Quantify their organization with a chosen statistical metric
* Examine the co-variability of clouds, circulation and precipitation
