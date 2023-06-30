<script setup>
import Title from '@/components/blocks/Title.vue';
import Content from '@/components/blocks/Content.vue';
import Text from '@/components/content/Text.vue';
import Row from '@/components/content/Row.vue';
import Column from '@/components/content/Column.vue';
import Unit from '@/components/blocks/Unit.vue';
import Image from '@/components/content/Image.vue';
import Frame from '@/components/content/Frame.vue';
import List from '@/components/content/List.vue';


import scratch_laberint from '@/img/unitats/programacio/scratch/laberint.png';
import laberint_01 from '@/img/unitats/programacio/scratch/scr-01-laberint-01.png';
import laberint_02 from '@/img/unitats/programacio/scratch/scr-01-laberint-02.png';
import laberint_03 from '@/img/unitats/programacio/scratch/scr-01-laberint-03.png';
import laberint_04 from '@/img/unitats/programacio/scratch/scr-01-laberint-04.png';
import laberint_05 from '@/img/unitats/programacio/scratch/scr-01-laberint-05.gif';
import laberint_06 from '@/img/unitats/programacio/scratch/scr-01-laberint-06.png';
import laberint_07 from '@/img/unitats/programacio/scratch/scr-01-laberint-07.png';
import laberint_08 from '@/img/unitats/programacio/scratch/scr-01-laberint-08.gif';
import laberint_09 from '@/img/unitats/programacio/scratch/scr-01-laberint-09.png';
import laberint_10 from '@/img/unitats/programacio/scratch/scr-01-laberint-10.gif';
import laberint_11 from '@/img/unitats/programacio/scratch/scr-01-laberint-11.png';
import laberint_12 from '@/img/unitats/programacio/scratch/scr-01-laberint-12.gif';
import laberint_13 from '@/img/unitats/programacio/scratch/scr-01-laberint-13.gif';
import laberint_14 from '@/img/unitats/programacio/scratch/scr-01-laberint-14.gif';
</script>
<template>
    <Title title="Laberint" :number=1 />
    <Title title="Introducció" :number=2 />
    <Content>
        <Row>
            <Column>
                <Text
                    text="Anem a crear un videojoc d'un laberint on un personatge haurà d'arribar al final d'ell. El personatge es mourà evitant els obstacles i tornarà al principi si els toca." />
                <Text
                    text="En primer lloc, abans de començar hauràs d'obrir [Scratch](https://scratch.mit.edu/) i crear un projecte nou. En fer-ho, carrega la plantilla que trobaràs en el següent [enllaç](https://drive.google.com/file/d/1PaEuF9tjuYbmXW3BkmtPkp60BfFyAAIN/view)" />
            </Column>
            <Column>
                <Image :imgProp="scratch_laberint" />
            </Column>
        </Row>
    </Content>

    <Title title="Moviment del personatge" :number=2 />
    <Content>
        <Text
            text="El primer que haurem de fer és fer que el personatge es quede a la posició inicial X i Y de l'escenari. Per fer-ho hem d'utilitzar un bloc *Al presionar bandera verda* (en esdeveniments) que seran les accions que s'executaran quan comencem el joc." />
        <Text
            text="A continuació afegirem el bloc d' *anar a x: __ y: __* i ahí serà on posarem la posició x i y del personatge. Per fer-ho, posa el personatge en la posició inicial i comprova la posició." />
        <Image :imgProp="laberint_01" />
        <Text
            text="Ara farem que es moga quan polsem les *fletxes cap amunt, avall, dreta i esquerra*. Per fer-ho has de buscar l'esdeveniment de *Al presionar una tecla* i de moment, anem a seleccionar cap a *l'esquerra*" />
        <Text
            text="Just després anem a posar 2 instruccions: la primera serà *Apuntar en direcció -90º* i després *Moure 10 passos*" />
        <Text
            text="Prova que al pressionar la tecla de la fletxa esquerra es mou cap a l'esquerra i després fes el mateix però per a les altres 3 fletxes que falten, pensant en els graus que has d'aplicar." />
        <Row>
            <Column>
                <Image :imgProp="laberint_02" />
            </Column>
            <Column>
                <Image :imgProp="laberint_03" />
            </Column>
        </Row>
    </Content>

    <Title title="Sensors" :number=2 />
    <Content>
        <Row>
            <Column>
                <Text
                    text="Anem a utilitzar els sensors per detectar les parets i que el personatge no les puga atravessar." />
                <Text
                    text="Per fer-ho necessitem posar un bucle *Per sempre* que estiga tota l'estona comprovant si es toca una paret o no." />
                <Text
                    text="Per tant, dins del bucle *Per sempre* afegeix un control *si __ llavors* on afegiràs la comprovació *si tocant color negre* que podràs trobar a la secció *sensors*" />
                <Text
                    text="En el moment en què estiga tocant el color negre, hauràs de fer que es *moga fins la posició inicial lliscant durant 2s*. Aquesta instrucció la trobaràs en la secció *moviment*" />
            </Column>
            <Column>
                <Image :imgProp="laberint_04" />
            </Column>
            <Column>
                <Image :imgProp="laberint_05" />
            </Column>
        </Row>
    </Content>

    <Title title="Obstacles" :number=2 />
    <Content>
        <Text
            text="Els obstacles han d'acabar movent-se per l'escenari però abans anem a canviar-li la disfressa al 2 i al 3." />
        <Text
            text="Per fer-ho has de seleccionar l'Obstacle 2, després la pestanya *Vestits* i per últim el botó de *Tria un vestit*" />
            <Image :imgProp="laberint_06" />
        <Text
            text="Després buscarem *ball* i seleccionarem la blava. Veuràs que s'ha afegit una nova disfressa, així que canvia el tamany i centra-ho al mig." />
        <Row>
            <Column>
                <Image :imgProp="laberint_07" />
            </Column>
            <Column>
                <Image :imgProp="laberint_08" />
            </Column>
        </Row>
        <Text text="Fes el mateix amb *l'obstacle 3*" />
        <Text
            text="Per últim anem a fer que es moguen. Selecciona l'obstacle número 1 i afegim l'esdeveniment *Quan la bandera verda es cliqui*. La primera acció serà moure-ho a la posició inicial." />
        <Text
            text="A continuació haurem de tindre un *per sempre* perquè repetisca tota la estona dos accions: lliscar cap a la posició final i lliscar cap a la posició inicial." />
        <Text text="Ací tens el resultat amb el codi de l'obstacle 1. Fes el mateix amb el 2 i el 3." />
        <Image :imgProp="laberint_09" />
        <Text text="El resultat de que els 3 obstacles es moguen." />
        <Image :imgProp="laberint_10" />

    </Content>

    <Title title="Xocar i acabar joc" :number=2 />
    <Content>
        <Row>
            <Column>
                <Text
                    text="Ara necessitem que al tocar els obstacles, el personatge torne a la posició inicial lliscant." />
                <Text
                    text="Per tant, dins del personatge, en el bucle *per sempre* has d'afegir una condició de *si __ llavors* on hauràs d'incloure 3 condicions amb o: tocant obstacle 1 *o* tocant obstacle 2 *o* tocant obstacle 3. I en cas que ocòrrega, ha de lliscar a la posició inicial (com quan tocava una paret)." />
                <Text text="Recorda que el o es troba a la secció *operadors*" />
            </Column>
            <Column>
                <Image :imgProp="laberint_11" />
            </Column>
        </Row>
        <Text
            text="Ara fes que quan toque el color roig de la meta el personatge *diga durant 2 segons que HA GUANYAT!!*" />
            <Image :imgProp="laberint_12" />
    </Content>

    <Title title="Millores a realitzar" :number=2 />
    <Content>
        <Text text="Per tal d'acabar el joc has de fer les següents millores:" />
        <List>
            <li>
                <Text text="Que no torne a la posició inicial al tocar una paret" />
            </li>

            <li>
                <Text text="Que al tocar una paret torne enrere en lloc d'anar a la posició inicial" />
            </li>
            <List>
                <li>
                    <Text text="Pista: ha de ser al pressionar les fletxes" />
                </li>
            </List>

            <li>
                <Text text="Afegeix un temporitzador que comence en 0 i que es pare quan toque la meta" />
            </li>
        </List>
        <Row>
            <Column>
                <Image :imgProp="laberint_13" />
            </Column>
            <Column>
                <Image :imgProp="laberint_14" />
            </Column>
        </Row>
        <Frame link="https://learningapps.org/watch?app=30998038" :elementStyles="{
            width: '100%',
            height: '80vh'
        }" />
    </Content>
</template>
