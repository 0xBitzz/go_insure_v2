from pyteal import Bytes, Int

PENDING = Bytes("Pending")
APPROVED = Bytes("Approved")
REJECTED = Bytes("Rejected")

# TODO: Premium Amount should be made dynamic due to factors such as age, health condition e.t.c.
# TODO: Algorithm to calculate premium & coverage amount respectively.
# TODO: Support payment with EURO.
PREMIUM_AMOUNT = Int(1_000_000)  # 1 USDC
COVERAGE_AMOUNT = Int(5_000_000)  # 5 USDC

DEFAULT_POLICY_EXPIRATION_TIMELINE = Int(31_536_000)
