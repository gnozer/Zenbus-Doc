
## Zenbox - documentation installation - février 2018

### Recommandations d'installation


Elements  | Nom |  Installation
--|---|--
![image](http://127.0.0.1:4000//images/schematics_capte.png)  | Boitier  |  Alimentation 12/24V avant contact (avec raccordement à la masse). Placé n'importe où, doit simplement être fixé (avec des colliers de serrage par exemple).
![image](http://127.0.0.1:4000/images/schematics_capte.png)  | Module 3G / GPS  |  Antenne déportée qui doit être "face au ciel". Par exemple, dans ...
![image](http://127.0.0.1:4000/images/schematics_capte.png)  | Connecteur molex  |  Utilisé pour alimenté le boitier, voir détail ci-dessous _**Schéma de cablâge**_


### Schéma de câblage
![image](http://127.0.0.1:4000/images/schematics_capte.png)

Numéro  |  Descriptif
--|--
1  |  RS232 TX
2  |  RS232 RTS
3  |  Digital Output 3
4  |  Digital Output 2
5  |  Analog (0-36v) input
6  |  Digital Input 4
7  |  Digital Input 3
8  |  Digital Input 2
9  |  Power (-) GROUND
10  |  Power (+) 12/24v
11  |  Digital (Button) Input [0-3.3v]
12  |  RS232 RX
13  |  RS232 CTS
14  |  Digital Output 1
15  |  Power (5v) output
16  |  CAN2 HIGH
17  |  CAN2 LOW
18  |  CAN1 HIGH
19  |  CAN1 LOW
20  |  Digital Input 1

### Validation configuration
- 1 bip -> alimentation OK
- 2 bips -> acquisition GPS/3G OK
