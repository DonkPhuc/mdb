import { initializeApp, cert, getApps } from 'firebase-admin/app'

const config = {
  type: 'service_account',
  project_id: 'mdb-auth',
  private_key_id: '120d8f3412dab9142deda76b8c2bc3daf175add1',
  private_key:
    '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDAEwik+LkTEifO\nz+idLZChXab9mRaKi5/SNl3k9rC3/4geKyena/NbkfQvO+bklVrD8E2udCFHyZSq\nxuWVBrTOqeDsrgwZzmFXti7drHotyx4LkDRchHoqA0jAsGjVAmeFdXnm2gJPoajf\nqLUs8EvhIu1wAllKO+TbIOLmBV++Ojad/hAN1XtE3xzvorYfCkVDTeE+PdKB11S1\nmIW1ErI/J4EFh/PQ6BtgE+KHQpG/rkhVUfwe1/uxdf9i383EMEP2iUH/W84y5eHb\np6t/IZybJx9DtJKy6/bJd7Sp1zYnYTTm85NUnplg4ARY9brzRZgrHrbzxtCvufoC\nW1XpZwIfAgMBAAECggEAQ3BLaDUGMlp9DKG2MD232th5kfAG2JVGg7XgCMzO5oO7\nZLBNR3zhIMUhwdXb72U7TbGZbMfMiZqO7tlP8Z+9qxQ9a4x+pi7uwa+vS9jLuzlm\nbrPulo9TH14w1Kr729Jwy4ygRPxFtHTzyLfBCSrD0aQETwAcHrLh20h0MkQvxieo\nYG9H38RcPdVJDCXaG8NjMlAFcBDvFHJjAMXHe1/L4bJK5LH9x5MxYXsgZSBDpmaH\nxBkxZOjvpbcz+KAtyeVinkh/FzkZHLEGdK/ob9oS1Uqsa1wksnySLTLz7wmiasvP\n1y54JB25Z4f1AtjbzPcb5GQf/BYu3yzAfSqC3ZmOOQKBgQD7oiHrQVvO5gK/Eu/N\nkQs+rT8+y1Qz7fxOk7XCDNgD3Q2EZb+fTFVbsXQhzWyNNtNupQgBN60HYZ9Ls1f5\nDh8Ukgu5I9kzLd7EHw6AAy3wr0Y0LXSnMwX8XX/bjEMCkDMHShEpQJ55yj7CBOcI\nYepjHjSQwCagW5a24gRdgIKDpwKBgQDDaFBPr7r2XmM/CNQl670NhUWrPhRmfvfT\n+6lX7yZ4GNyB0SnpMkYSw6xR/312Xg269X6lyY3RtdfZ7lTgsqwFqNIu6uqsiIW8\n3aoVp0HWFRqANIsX42ljm+Z63gCXPydt2zSJxItwwCa6wcbxYi4ialykQr5EQuXK\n9Ore16m8yQKBgGjphDLNoTV1+Jcpkgmm+4U6PjA0Hfs4sgUg2Jr7N+UEeOpGcco8\nzSnZpo2hVCzcOvLao6e+SsnVDdFGCNux44t0CKc8JwaLjWE/gZAlwzWiHicK/KPp\nRgmeAfzLUfTzohLb8qO8aVZl2ByUZq68BDknEst3EaOyC/hb624AcmnpAoGAN6Aa\nPJTpw/haiDcbLTBOQOsPShAB/qtmIRIiwsVxTf7Fxq6kH54QFIdfJnh0Xp2nivEX\nfFpD5M6/A2q0/sHd9j54lqKI61RxvbHcGQ3jz+1x/cz3S3WRKqnWkmNgB64Sq1Mb\nQZyRlScd30wKNeyc9W8RsDDPuN7SS1QtCAKcbwECgYA674DF+Kt5Y/W8Moqh3WvC\nd1b9Dtl/ypV9Gr4w5i/OsIw9J9rnEBUK3IwXEmUQyRnWFLpuNmfZrvb5swoijfQJ\nXZ2S5l2fuAsMC9Fl/mREqNHJWT/bFjY5plgcAdjRLoTqYIshzEddRAejpA4Eit93\n3Zu18jWRgFAiZnPmWRpPxA==\n-----END PRIVATE KEY-----\n',
  client_email: 'firebase-adminsdk-n9h1f@mdb-auth.iam.gserviceaccount.com',
  client_id: '115542723373980869446',
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url:
    'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-n9h1f%40mdb-auth.iam.gserviceaccount.com',
  universe_domain: 'googleapis.com',
}

export default function firebaseServer() {
  if (getApps().length === 0) {
    initializeApp({
      // @ts-ignore
      credential: cert(config),
    })
  }
}
