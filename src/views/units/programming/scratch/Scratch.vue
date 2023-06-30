<script setup>
import Title from '@/components/blocks/Title.vue';
import Content from '@/components/blocks/Content.vue';
import Text from '@/components/content/Text.vue';
import Row from '@/components/content/Row.vue';
import Column from '@/components/content/Column.vue';
import Unit from '@/components/blocks/Unit.vue';
import Image from '@/components/content/Image.vue';
import Button from '@/components/content/Button.vue';

import scratch_laberint from '@/img/unitats/programacio/scratch/laberint.png';
import scratch_flappy_bird from '@/img/unitats/programacio/scratch/flappy_bird.png';
import scratch_space_invaders from '@/img/unitats/programacio/scratch/space_invaders.png';
import scratch_pong from '@/img/unitats/programacio/scratch/pong.png';
 
</script>
<template>
    <Title title="Scratch" :number=1></Title>
    <Content>
        <Text text="Contingut extret de [Programa Ergo Sum](https://www.programoergosum.es/)."/>
        <Row>
            <Column additionalClass="four_cols text-center">
                <Image :imgProp="scratch_laberint"/>
                <br>
                <Button title="Laberint" link_page_name="scratch_laberint"/>
            </Column>
            <Column additionalClass="four_cols text-center">
                <Image :imgProp="scratch_flappy_bird"/>
                <br>
                <Button title="Flappy Bird" link_page_name="scratch_flappy_bird"/>
            </Column>
            <Column additionalClass="four_cols text-center">
                <Image :imgProp="scratch_space_invaders"/>
                <br>
                <Button title="Space Invaders" link_page_name="scratch_space_invaders"/>
            </Column>
            <Column additionalClass="four_cols text-center">
                <Image :imgProp="scratch_pong"/>
                <br>
                <Button title="Pong" link_page_name="scratch_pong"/>
            </Column>
        </Row>
    </Content>

    <Title title="Projecte final" :number=2></Title>
    <Content>
        <Text text="Després d'haver creat els anteriors videojocs, has de pensar en el teu videojoc propi. Pot combinar diferents jocs vists anteriorment o ser totalment nou. Consulta abans de començar per no passar-se d'ambiciós o quedar-se curt amb el projecte." />
        <Text text="Recorda que es valorarà *la creativitat, el acabat final i la jugabilitat*" />
    </Content>

</template>