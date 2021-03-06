import React from 'react'
import { storiesOf } from '@storybook/react'
import { generateSankeyData } from 'nivo-generators'
import '../style.css'
import { Sankey } from '../../src'

const commonProperties = {
    width: 1100,
    height: 700,
    margin: { top: 0, right: 80, bottom: 0, left: 80 },
    data: generateSankeyData({ nodeCount: 11, maxIterations: 2 }),
    colors: 'd320b',
}

const stories = storiesOf('Sankey', module).addDecorator(story => (
    <div className="wrapper">{story()}</div>
))

stories.add('default', () => <Sankey {...commonProperties} />)

stories.add('custom align (right)', () => <Sankey {...commonProperties} align="right" />)

stories.add('outside labels', () => <Sankey {...commonProperties} labelPosition="outside" />)

stories.add('vertical labels', () => (
    <Sankey {...commonProperties} labelOrientation="vertical" labelPadding={20} />
))

stories.add('nodes x padding', () => (
    <Sankey {...commonProperties} nodePaddingX={6} nodeWidth={24} nodeBorderWidth={0} />
))

stories.add('contracting links', () => <Sankey {...commonProperties} linkContract={10} />)
