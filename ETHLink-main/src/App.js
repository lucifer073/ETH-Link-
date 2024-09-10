import React from 'react';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Feed from './components/Feed';
import Bio from './components/Bio';
import Signin from './components/Signin';
import Jobs from './components/Jobs';
import Notifications from './components/Notifications';
import Tickets from './components/Tickets';
import Proposals from './components/Proposals';
import '@rainbow-me/rainbowkit/styles.css';
import { http, createConfig } from 'wagmi';
import { sepolia } from 'wagmi/chains';
import { RainbowKitProvider, getDefaultConfig } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { walletConnect } from 'wagmi/connectors';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import CompNotifications from './components/CompNotifications';
import Complogin from './components/Complogin';


export const availSepolia = {
  id: 202402021700,
  name: 'OP Avail Sepolia Testnet',
  nativeCurrency: {
    name: 'ETH', // Assuming native token is ETH
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: {
    default: { http: 'https://op-avail-sepolia.alt.technology' }
  },
  blockExplorers: {
    default: { name: 'OP Avail Sepolia Explorer', url: 'https://op-avail-sepolia-explorer.alt.technology' },
  },
 // Important for testnet identification
};

const queryClient = new QueryClient();

export const config = getDefaultConfig({
  appName: 'EthMumbai',
  projectId: 'b4c074b408e38eb0348c3810737f0ff4',
  chains: [sepolia],
})

export const wagmiConfig = createConfig({
  chains: [availSepolia],
  connectors: [
    walletConnect({
      projectId: 'b4c074b408e38eb0348c3810737f0ff4'
    }),
  ],
  transports: {
    [availSepolia.id]: http(),
  },
})



export default function App() {
  return (
    <WagmiProvider config = {config} >
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
        <div className="min-h-screen bg-black font-mono md:w-full w-fit ">
      <Router>
        <Routes>
          <Route exact path='/signup' element={<Login />} />
          <Route exact path='/' element={<Home />} />
          <Route exact path='/feed' element={<Feed/>} />
          <Route exact path='/profile' element={<Bio/>} />
          <Route exact path='/signin' element={<Signin/>} />
          <Route exact path='/jobs' element={<Jobs/>} />
          <Route exact path='/notifications' element={<Notifications/>} />
          <Route exact path='/company/tickets' element={<Tickets/>} />
          <Route exact path='/company/proposals' element={<Proposals/>} />
          <Route exact path='/company/compNotifications' element={<CompNotifications/>} />
          <Route exact path='/company/login' element={<Complogin/>} />
        </Routes>
      </Router>
    </div>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>

  );
}

