/**
 * IP Widget for Übersicht
 * 
 * Version: 1.1
 * Last Updated: 01/29/2019
 * 
 * Created by Bert Bredewold
 */

// Get's WAN IP from a dig to OpenDNS
export const command = 'IPAddresses.widget/ip.sh';

// Refresh every X miliseconds
export const refreshFrequency = 10000;

// Base layout
export const className = {
    bottom: '180px',
    right: '12px',
    color: '#fff',
    fontFamily: 'Helvetica Neue',
    fontWeight: 300,
    fontSize: '1em'
}

// Render the widget
export const render = ({output, error}) => {
    if (output) {
        console.log(output);
        // Collect Interfaces from JSON
        const interfaces = JSON.parse(output).interfaces;

        // Map over the interfaces and construct table contents
        const items = interfaces.map((el) => {
            return (
                <tr key={el.iface}>
                    <td>{el.iface}: <span>{el.address}</span>
                    {/* <span style={{color: 'rgba(255,255,255,0.8)'}}>{el.cidr ? '/' + el.cidr : ''}</span> */}
                    {/* <span style={{color: 'rgba(255,255,255,0.8)'}}>{el.router ? ' -> ' + el.router : ''}</span> */}
                    </td>
                </tr>
            )
        });
    
        // Return the table
        return error ? (
            <div>Oops: <strong>{String(error)}</strong></div>
        ) : (
            <table>
                <tbody>
                    {items}
                </tbody>
            </table>
        );
    }
}