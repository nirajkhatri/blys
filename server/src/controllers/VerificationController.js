async function verifyCode(req, res) {
  const { verification_code } = req.body;

  const isCodeValid =
    verification_code.length == 6 && parseInt(verification_code.at(-1)) !== 7;

  if (!isCodeValid) {
    return res.status(400).json({
      message: 'Verification Error',
    });
  }

  res.json({
    message: 'success',
  });
}

module.exports = {
  verifyCode,
};
