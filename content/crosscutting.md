---
header_menu: false
---

# Cross cutting activities

A number of ambitious cross cutting activities are also planned.  These usually introduce or explore technical capabilities that might be useful for addressing a range of scientific questions.  For this reason we are setting up cross-cutting activities whose participants may also want to join a science team. Some of the activities require early registration to ensure timely access to the tools.

Activities are given a unique identifier (uid) following the convention ‘hk25-uid’. Each activity will also have a lead and an associated repo on github with the same uid. The repo will serve as the primary basis for communication among participants in an activity.  Mattermost channels, markdown pads, and video-conference links may also serve as supplemental forms of communications, as indicated on by the README for each activity.

---
### Joint EarthCARE analysis with ESA ([hk25-EarthCARE](https://github.com/digital-earths-global-hackathon/hk25-teams/tree/main/hk25-EarthCARE))

[EarthCARE](https://earth.esa.int/eogateway/missions/earthcare) is a satellite, developed by ESA and JAXA and is the sixth satellite choosen as part of ESA's Earth Explorer Programme.   It was launched on 28 May 2024, and will be completing its first year in orbit at the time of the Hackathon.  It has unusual capabilities for measuring clouds, aerosols, and radiation.

In this cross-cutting activity we will analyze both EarthCARE data and the participating models along virtual EarthCARE swaths, with an initial focus on tropical deep convection as analyzed by EarthCARE, aircraft, ships and ground stations during the [ORCESTRA campaign](http://orcestra-campaign.org/), i.e., over the Tropical Atlantic in the time-period between 10 August and 30 September.

**Coordination**: Saskia Brose (saskia.brose@esa.int)

#### Sketch of initial activities:
* extract model output along selected orbit frames
* post-process output using model simulators
* extract analagous EarthCARE frames and data from reanalyses.
* perform composit analysis of various quantities.

---
### DestinE with the ClimateDT Consortium ([hk25-DestinE](https://github.com/digital-earths-global-hackathon/hk25-teams/tree/main/hk25-DestinE))

Destination Earth, aka [DestineE](https://destination-earth.eu), is an initiative of the European Commission which includes the operationalization of multi-decadal climate simulations using km-scale global models. Several multi-decadal scenario simulations have been performed with the [Climate Change Adaptation Digital Twin](https://destine.ecmwf.int/climate-change-adaptation-digital-twin-climate-dt/#What-is-the-Climate-DT) and are being integrated into the DestinE platform.

In this cross-cutting activity we will adopt and expand the analyses of different science teams to the DestinE data. One of the goals of this activity is to experiment with the capabilities of the [DestinE data platform](https://platform.destine.eu). Another is to expand the scope of the scientific analysis being performed by the science teams using the multi-decadal km-scale simulations of ClimateDT.

**Note** Upgraded access to the DestinE data platform is required for eligible participants in the Hackathon. Those wishing to gain access need to register by 2 May (via https://platform.destine.eu/access-policy-upgrade/), and abide by the DestinE data policies.

**Coordination**: Tracy Kiszler (theresa.kiszler@csc.fi), **Co-coordination**: Thomas Rackow (thomas.rackow@ecmwf.int)

#### Sketch of initial activities:
* gain access to the DestinE platform
* identify analyses from science teams that could be executed on that platform.
* perform analyses and compare to Hackathon models

---
### AI Representations with NVIDIA ([hk25-NVIDIA](https://github.com/digital-earths-global-hackathon/hk25-teams/tree/main/hk25-NVIDIA))

NVIDIA has been exploring the use of AI to improve the workflows associated with km-scale models.  For the Hackathon they have developed a prototype emulator allows massive compression of km-scale data, which then can provide a platofrm for accelerated analysis.

In this cross-cutting activity we will evaluate the capabilities and limitations of the emulator, and its ability to learn differences amond km-scale models. 

**Note** Participants are asked to register for the team as early as possible so the varied skill levels can be evalauted and approrpiate activities defined. 

**Coordination**: Noah Brenowitz (nbrenowitz@nvidia.com)

#### Sketch of initial activities:
* extend AI training to additional models hosted on NERSC mode
* scale out the AI traning to other hackathon nodes and models
* test inference of model trained on an earlier version of ICON and ERA5

---
### Feature tracking with the grassroots ([hk25-Tracking](https://github.com/digital-earths-global-hackathon/hk25-teams/tree/main/hk25-Tracking))

Global models simulating the atmosphere at km-scale with high resolution spatio-temporal output facilitate tracking of a variety of simulated features, similar to what is done using satellite data.  For example tracking can be used to identify and follow tropical storms, mesoscale convective systems, atmospheric rivers, and so on.  For the hackathon a number of tracking tools are being adapted to work on the HEALPix output of the models.  Trackers will be introduced to related science teams by members of this cross-cutting activity.

**Coordination**: Zhe Feng (zhe.feng@pnnl.gov)

#### Sketch of initial activities
- Gain familiarity with one or more trackers
- Develop and extend their capabilities
- Apply to output to answer questions posed by science teams.
