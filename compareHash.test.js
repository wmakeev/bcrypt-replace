require("./index");
const test = require("tape");

test("compareHash", (t) => {
  const source = [
    ["", "$2b$10$03s5duOrgmhZkBE8XmRZjuep0Ir59g1axhOhnf0jzVwVx/PoF25aq"],
    ["a", "$2b$10$NFDsxTnsdE9Y5VYLukg1geBvR2sGpgzttic5f5ZTHfAr9wEQye0oC"],
    ["1", "$2b$10$bsbNeuCZe2xsH9ptWiLVi.s7I/sbiCxTXKnZXqc1DyMvstb4icdNK"],
    ["123", "$2b$10$dTLrjwMQxDuEJWAO/4dbTujry/h.VhozG995udB/VlI4PNYNFbtOy"],
    [
      "!@#$%^&*(",
      "$2b$10$1KoQvVa1uwEztlVJp0ZQkeSVwSPWyc4FCbPKwRfW3OO5nEqY.OhRS",
    ],
    [
      "21-12345",
      "$2b$10$ZaYOciEKGOBy0m/d/5ozvuVSCxL4VwDgFALcwVRQKUhbMvobFmwG2",
    ],
    ["20-123", "$2b$10$idQZ7vN0LzId2BcxjDWt4.BsPErRF/6KbKimvEOuDT9/eDnZNB0EW"],
    [
      "kfwgeiohfgbejk kugwkrhieh  kjeht ioerhg iuehtoerh tike therkth lkerhtkerht kej",
      "$2b$10$ibTMr/2HGsGkpMtJdooBw.TE1jgEwklg.s9dhvciMXycBnv1ZRYUy",
    ],
    [
      "шла Саша по шоссе",
      "$2b$10$qEJ85ATbfGqrlICyLuMld.j3DrEQ2DVjqhCYBdear9r.GJD8bcJL2",
    ],
  ];

  for (const [str, result] of source) {
    t.ok(str.compareHash(result), `should compare "${str}"`);
  }

  t.end();
});
