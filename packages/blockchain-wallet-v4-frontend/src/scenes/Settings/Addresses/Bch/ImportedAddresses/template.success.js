import React from 'react'
import { filter } from 'ramda'
import styled from 'styled-components'
import AddressRow from '../../Btc/AddressRow'
import { FormattedMessage } from 'react-intl'
import { SettingDescription, SettingHeader } from 'components/Setting'
import { Icon, Table, TableHeader, TableCell, Text } from 'blockchain-info-components'

const Wrapper = styled.section`
  box-sizing: border-box;
`
const AddressesSettingDescription = SettingDescription.extend`
  margin-bottom: 10px;
`
const ImportedAddressesSettingHeader = SettingHeader.extend`
  justify-content: flex-start;
  margin-top: 30px;
`
const WarningWrapper = styled.div`
  display: flex;
  align-items: center;
  .warning-icon {
    margin-right: 4px;
  }
`

const Success = (props) => {
  const { importedAddresses, search } = props

  const isMatch = (address) => !search || address.addr.toLowerCase().indexOf(search) > -1

  const importedAddressesTableRows = filter(isMatch, importedAddresses).map((address, i) => {
    return (<AddressRow key={address.addr} address={address} coin='BCH' />)
  })

  return (
    <Wrapper>
      <ImportedAddressesSettingHeader>
        <FormattedMessage id='scenes.settings.addresses.imported_bch_addrs' defaultMessage='Imported Bitcoin Cash Addresses' />
      </ImportedAddressesSettingHeader>
      <AddressesSettingDescription>
        <WarningWrapper>
          <Icon name='alert-filled' size='22px' className={'warning-icon'} />
          <FormattedMessage id='scenes.settings.addresses.imported_bch_addrs_desc' defaultMessage='Imported funds are not protected by your backup phrase. To ensure these funds are secured, please transfer them directly into your wallet.' />
        </WarningWrapper>
      </AddressesSettingDescription>
      {
        importedAddressesTableRows.length > 0 &&
        <Table>
          <TableHeader>
            <TableCell width='40%'>
              <Text size='13px' weight={500} capitalize>
                <FormattedMessage id='scenes.settings.imported_addresses.address' defaultMessage='Address' />
              </Text>
            </TableCell>
            <TableCell width='40%'>
              <Text size='13px' weight={500} capitalize>
                <FormattedMessage id='scenes.settings.imported_addresses.wallet_description' defaultMessage='Balance' />
              </Text>
            </TableCell>
          </TableHeader>
          {importedAddressesTableRows}
        </Table>
      }
    </Wrapper>
  )
}

export default Success
