# Model Name: NICAM
- Team Name: NICAM Team
- Model Link: https://nicam.jp/dokuwiki/doku.php?id=Top

## Model description: 
The Nonhydrostatic ICosahedral Atmospheric Model (NICAM) adopts a fully compressible nonhydrostatic dynamical core, descretized by a finite volume method with an icosahedral A-grid system (Tomita and Satoh, 2004; Satoh et al., 2014). Any deep- and shallow-cumulus parameterizations are not employed (i.e., explicit convection with single-moment cloud microphysics). Turbulent mixing is represented by an eddy-diffusivity model and the Leonard/Cross terms. Other details that comprise the model can be found in Takasuka et al. (2024) (see the "MP-LEO2-L78" config.).

Tomita, H., and M. Satoh. 2004. “A new dynamical framework of nonhydrostatic global model using the icosahedral grid.” Fluid Dynamics Research, 34(6), 357. https://doi.org/10.1016/j.fluiddyn.2004.03.003

Satoh, M., H. Tomita, H. Yashiro, H. Miura, C. Kodama, T. Seiki et al. 2014. “The non-hydrostatic icosahedral atmospheric model: Description and development.” Progress in Earth and Planetary Science, 1, 1-32. https://doi.org/10.1186/s40645-014-0018-1

Takasuka, D., C. Kodama, T. Suematsu, T. Ohno, Y. Yamada, T. Seiki et al. 2024. “How can we improve the seamless representation of climatological statistics and weather toward reliable global K‐scale climate simulations?.” Journal of Advances in Modeling Earth Systems, 16(2): e2023MS003701. https://doi.org/10.1029/2023MS003701

### Contact:
[Daisuke Takasuka](mailto:takasuka@tohoku.ac.jp) 

## Simulation Details

Simulation DOI: 

- Resolution: 
    - Horizontal: 3.5km global
    - Vertical: 78 levels 
    - model top of 50km
- Free running, initialized on 2011-01-01
- Simulation Period: 2011-01-01 to 2021-02-28 (but only 2020-03-01 to 2021-02-28 for the hackathon)

## Data notes
