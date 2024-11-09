

// Define the ECC algorithm and key size (P-256 curve)
const algorithm = {
    name: "ECDSA",       // ECDSA for Elliptic Curve Digital Signature Algorithm
    namedCurve: "P-256"  // Using the P-256 curve (256-bit)
  };
  
  // Generate the ECC key pair
  window.crypto.subtle.generateKey(
    algorithm,
    true,                // Whether the key is exportable
    ["sign", "verify"]   // Key usage (sign with private key, verify with public key)
  ).then(function(keyPair) {
    console.log("Public Key:", keyPair.publicKey);
    console.log("Private Key:", keyPair.privateKey);
  }).catch(function(err) {
    console.error("Error generating key pair:", err);
  });
  

  window.crypto.subtle.exportKey("spki", keyPair.publicKey)
  .then(function(exportedPublicKey) {
    console.log("Exported Public Key:", new Uint8Array(exportedPublicKey));
  })
  .catch(function(err) {
    console.error("Error exporting public key:", err);
  });
