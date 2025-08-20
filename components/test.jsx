// GoogleAuthButton.tsx
import React, { useEffect, useState } from 'react';
import { Button, View, ActivityIndicator, StyleSheet, TouchableOpacity, Text } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import Logo from '@/assets/icons/googleIcon.svg';

WebBrowser.maybeCompleteAuthSession();

interface GoogleAuthButtonProps {
  onLoginSuccess: (user: any) => void;
}

const GoogleAuthButton: React.FC<GoogleAuthButtonProps> = ({ onLoginSuccess }) => {
  const [loading, setLoading] = useState(false);

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: 'TU_CLIENT_ID_DE_GOOGLE',
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      fetchUserInfo(authentication?.accessToken);
    }
  }, [response]);

  const fetchUserInfo = async (token: string | undefined) => {
    setLoading(true);
    try {
      const res = await fetch('https://www.googleapis.com/userinfo/v2/me', {
        headers: { Authorization: Bearer ${token} },
      });
      const user = await res.json();
      setLoading(false);
      onLoginSuccess(user);
    } catch (error) {
      console.error("Error fetching user info: ", error);
      setLoading(false);
    }
  };

  return (
      loading ? (
        <ActivityIndicator size="small" color="#0000ff" />
      ) : (
        <TouchableOpacity style={styles.googleButton} disabled={!request} onPress={() => {promptAsync();}}>
            <Logo style={styles.googleIcon} width={24} height={24} />
            <Text style={styles.googleButtonText}>Ingresar con Google</Text>
        </TouchableOpacity>
      )
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: '100%',
  },
  googleButton: {
    width: '100%',
    height: 48,
    borderColor: '#ccc',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  googleIcon: {
    marginRight: 8,
  },
  googleButtonText: {
    fontSize: 18,
    fontFamily: 'regular',
    color: '#000',
  },
});

export default GoogleAuthButton;