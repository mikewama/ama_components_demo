import React, { Component, useCallback, useState } from 'react';
import { ThemeProvider } from 'styled-components'
import { Theme } from '@amaabca/react-components'
import { Button, Header, Sidebar, Footer, FooterColumn, setShowSidebar, PageContainer, Banner, StyledLink, Section, Content, Input, Dropdown, DropdownSelect, Radio, Checkbox } from '@amaabca/react-components'


const BasicLayout = (props: any) => {

    const styles = {
        topPadding: {
            height: "53px",
        }
    }

    const onBackdropClick = useCallback(() => setShowSidebar(oldState => !oldState), [])
    const [checked1, set1] = useState('check1', true)
    const [checked2, set2] = useState('check2', false)
    const onChange = (checked, set) => {
        set(!checked)
    }
    const setValue4 = () => { }
    return (
        <ThemeProvider theme={Theme}>
            <Header logoUrl='/?path=/story/atoms' onClickHamburger={() => window.alert('Hamburger click!')}>
                <Header.Item label='Cart(0)' url='/?path=/story/atoms' />
                <Header.Dropdown label='Welcome, AMA Agent'>
                    <Header.Dropdown.Item label='My Account' badgeLabel='1' />
                    <Header.Dropdown.Item label='About' url='/' />
                    <Header.Dropdown.Item label='Help' />
                </Header.Dropdown>
            </Header>
            <div style={styles.topPadding} />
            <Banner headerText='Banner with Header' color='red'>
                This is a message. <StyledLink to='https://ama.ab.ca'>This is a link.</StyledLink>
            </Banner>
            <PageContainer flex='1' headerText='Full Page Container'>
                <Section headerText='Section' columnStart={3} columnSpan={8} >
                    <Content>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta, sapien vitae dignissim rutrum, lectus augue laoreet odio, in dictum neque urna ut massa. Aliquam venenatis lectus at imperdiet ullamcorper. Mauris eu eros nec elit maximus luctus. Donec aliquet purus mattis, tempus ante id, rutrum ligula. Nullam dui massa, ultrices faucibus metus posuere, ornare elementum risus. Curabitur sollicitudin ultricies quam a vestibulum. Donec eleifend tellus at sapien hendrerit, quis malesuada dui pharetra. Fusce non vulputate eros, sit amet rutrum nibh. Ut sollicitudin gravida neque, at pretium massa laoreet eget.</Content>
                    <Content>Praesent consectetur consequat turpis, vitae finibus nibh pretium id. Pellentesque vehicula ipsum augue, ac dapibus quam dictum in. Vestibulum sapien erat, consequat eget venenatis vel, vehicula sed nisi. Nunc vehicula nunc enim. Cras urna ex, scelerisque eget mattis quis, euismod quis risus. Nam quis semper erat, sed tincidunt justo. Integer luctus sem est, at pretium metus tincidunt eget. Etiam convallis ex in vestibulum sollicitudin. Suspendisse feugiat consequat leo, quis ultrices ante fermentum vitae. Donec dictum sapien vitae varius blandit. Integer bibendum nulla eget orci interdum consectetur. Curabitur consectetur nisl non tincidunt tincidunt. Nunc dictum massa in ligula pretium, et consectetur neque tincidunt. Curabitur odio augue, vestibulum a euismod ut, porttitor et ligula. Nulla ornare leo massa, quis sagittis eros dapibus a.</Content>
                    <Content>Etiam commodo at eros nec accumsan. Ut ultrices tristique lacinia. Aliquam eu facilisis dolor. Nullam id ipsum ut justo tempus mattis ut ac nunc. Vivamus purus augue, pretium id odio at, ultrices maximus justo. In hac habitasse platea dictumst. Cras scelerisque erat tellus, a tempor leo facilisis ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus tincidunt erat porttitor, placerat lacus sed, ullamcorper lacus. Duis eget finibus mi. Nulla in porta magna. Morbi tincidunt vitae libero vel posuere. Sed dolor est, porta pellentesque turpis sed, ultrices porttitor lorem.</Content>
                </Section>
                <Section headerText='Section - Form Molecules' columnStart={4} columnSpan={6} >
                    <Content>Form Molecules</Content>
                    <Input
                        labelName='What is your membership number?'
                        identifier='membership-number'
                        defaultValue='1234567890'
                        errorMessage='Please enter your membership number'
                        hint='It is a 10-digit number'
                        isOptional={false}
                        prependText='620272'
                    />
                    <Dropdown
                        columnStart={1}
                        columnSpan={12}
                        identifier='dropdown-noerror2'
                        labelName='Multiple dropdowns with different default values'
                        hasBottomMargin
                    >
                        <DropdownSelect
                            identifier='dropdown-noerror1'
                            onChange={() => { }}
                            defaultValue='2'
                        >
                            <option value='default' disabled>Please Select</option>
                            <option value='1'>Option 1</option>
                            <option value='2'>Option 2</option>
                            <option value='3'>Option 3</option>
                        </DropdownSelect>
                        <DropdownSelect
                            identifier='dropdown-noerror1'
                            onChange={() => { }}
                            defaultValue='3'
                        >
                            <option value='default' disabled>Please Select</option>
                            <option value='1'>Option 1</option>
                            <option value='2'>Option 2</option>
                            <option value='3'>Option 3</option>
                        </DropdownSelect>
                    </Dropdown>
                    <Radio
                        hint='You can edit the label on this form'
                        errorMessage='Set With Knobs'
                        identifier='radio-one-choice-error-question'
                        items={[
                            { label: 'Nutella', value: 'Nutella' },
                            { label: 'Sushi', value: 'Sushi' }
                        ]}
                        labelName='What is your favourite food?'
                        onChange={(e) => onChange(e, setValue4)}
                        value={4}
                    />
                    <Checkbox
                        checked={checked2}
                        onChange={() => onChange(checked2, set2)}
                        labelName='Show me the error?'
                        errorMessage='This is what an error looks like.'
                    />
                </Section>
                <Section headerText='Section' columnStart={3} columnSpan={8} >
                    <Content>Nulla porttitor quis ipsum vitae pretium. Suspendisse pretium accumsan nulla, quis porta magna placerat ac. Quisque suscipit urna vel arcu tincidunt luctus at id neque. Morbi posuere, turpis ut luctus fermentum, dolor ex sagittis dolor, quis bibendum risus tortor vel elit. Praesent nisl libero, tempor non lacinia sed, varius quis lorem. Donec dignissim ipsum et pulvinar consequat. Praesent nec massa at enim varius dignissim molestie nec nisl.</Content>
                    <Content>Proin efficitur purus eget tincidunt eleifend. Praesent ut hendrerit libero, vitae suscipit nibh. Donec bibendum, justo sit amet accumsan fermentum, ipsum lorem volutpat lacus, eget egestas tellus lacus eu ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris vel malesuada lacus. Nulla vestibulum lectus elementum, condimentum felis id, eleifend magna. Suspendisse sit amet nisi ac massa pellentesque rutrum. Duis sapien nulla, laoreet et condimentum dapibus, ornare quis risus. Pellentesque eget tempus justo. Vivamus varius sit amet quam id varius. Morbi ac nunc suscipit neque tempus interdum.</Content>
                </Section>
            </PageContainer>
            <Footer>
                <FooterColumn header={'Contact'} columnStart={3} columnSpan={2}>
                    <StyledLink display={'block'} to='/my-home-page' color='white'>Internal Link</StyledLink>
                    <StyledLink display={'block'} to='https://www.myhomepage.com/' color='white'>External Link</StyledLink>
                </FooterColumn>
                <FooterColumn header={'Centres'} columnStart={5} columnSpan={2}>
                    <StyledLink display={'block'} to='/my-home-page' color='white'>Internal Link</StyledLink>
                </FooterColumn>
                <FooterColumn header={'Quick Links'} columnStart={7} columnSpan={2}>
                    <StyledLink display={'block'} to='/my-home-page' color='white'>Internal Link</StyledLink>
                </FooterColumn>
                <FooterColumn header={'Applications'} columnStart={9} columnSpan={2}>
                    <StyledLink display={'block'} to='/my-home-page' color='white'>Internal Link</StyledLink>
                </FooterColumn>
            </Footer>
        </ThemeProvider>
    )
}

export default BasicLayout;
