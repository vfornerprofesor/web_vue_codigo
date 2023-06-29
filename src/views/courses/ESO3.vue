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
</script>

<template>
    <Title title="3r d'ESO" :number=1 />
    <Content>
        <Row>
            <Column>
                <Unit img_name="scratch" link_page_name="scratch" title="Scratch"></Unit>
            </Column>
        </Row>
    </Content>
</template>