import { AppShell, Title } from '@mantine/core';
import RouterLinks from '../../RouterLinks';


const Header = ()=>{

    return(
        <AppShell>
            <AppShell.Header>
                <Title order={1} p={20}  size="h1" ta="center">POKEMON</Title>
            </AppShell.Header>
            <RouterLinks/>
        </AppShell>
    )
}

export default Header;