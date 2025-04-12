import React, { useState } from 'react';
import './App.css';

interface VisaApplicationForm {
  // Personal Information
  surnames: string;
  givenNames: string;
  nativeAlphabet: string;
  nativeAlphabetNotApplicable: boolean;
  hasOtherNames: string;
  otherNames: string;
  hasTelecode: string;
  sex: string;
  maritalStatus: string;
  birthDate: string;
  birthCity: string;
  birthStateProvince: string;
  birthStateProvinceNotApplicable: boolean;
  birthCountry: string;
  nationality: string;
  
  // Passport Information
  passportNumber: string;
  passportBookNumber: string;
  passportIssueDate: string;
  passportExpiryDate: string;
  passportCountry: string;
  hasLostPassport: string;
  lostPassportDetails: string;
  
  // Address and Phone Information
  homeAddress: string;
  homeCity: string;
  homeState: string;
  homePostalCode: string;
  homeCountry: string;
  mailingAddress: string;
  mailingCity: string;
  mailingState: string;
  mailingPostalCode: string;
  mailingCountry: string;
  homePhone: string;
  mobilePhone: string;
  email: string;
  socialMedia: string;
  
  // Travel Information
  purposeOfTrip: string;
  intendedArrivalDate: string;
  intendedDepartureDate: string;
  usAddress: string;
  tripPayer: string;
  travelCompanions: string;
  
  // U.S. Contact Information
  usContactName: string;
  usContactRelationship: string;
  usContactOrganization: string;
  usContactAddress: string;
  usContactPhone: string;
  
  // Family Information
  fatherName: string;
  fatherBirthDate: string;
  motherName: string;
  motherBirthDate: string;
  parentsInUS: string;
  spouseName: string;
  spouseBirthDate: string;
  spouseNationality: string;
  
  // Work/Education Information
  occupation: string;
  employerName: string;
  employerAddress: string;
  monthlyIncome: string;
  responsibilities: string;
  educationLevel: string;
  schoolName: string;
  schoolAddress: string;
  
  // Security and Background
  hasHealthConditions: string;
  healthConditionsDetails: string;
  hasCriminalHistory: string;
  criminalHistoryDetails: string;
  hasDrugUse: string;
  hasTerroristActivities: string;
  hasImmigrationViolations: string;
  hasMilitaryService: string;
  militaryServiceDetails: string;
  
  // Additional Information
  sevisId: string;
  schoolInfo: string;
  petitionDetails: string;
  previousUSTravel: string;
}

function App() {
  const [formData, setFormData] = useState<VisaApplicationForm>({
    // Initialize all fields with empty values
    surnames: '',
    givenNames: '',
    nativeAlphabet: '',
    nativeAlphabetNotApplicable: false,
    hasOtherNames: '',
    otherNames: '',
    hasTelecode: '',
    sex: '',
    maritalStatus: '',
    birthDate: '',
    birthCity: '',
    birthStateProvince: '',
    birthStateProvinceNotApplicable: false,
    birthCountry: '',
    nationality: '',
    passportNumber: '',
    passportBookNumber: '',
    passportIssueDate: '',
    passportExpiryDate: '',
    passportCountry: '',
    hasLostPassport: '',
    lostPassportDetails: '',
    homeAddress: '',
    homeCity: '',
    homeState: '',
    homePostalCode: '',
    homeCountry: '',
    mailingAddress: '',
    mailingCity: '',
    mailingState: '',
    mailingPostalCode: '',
    mailingCountry: '',
    homePhone: '',
    mobilePhone: '',
    email: '',
    socialMedia: '',
    purposeOfTrip: '',
    intendedArrivalDate: '',
    intendedDepartureDate: '',
    usAddress: '',
    tripPayer: '',
    travelCompanions: '',
    usContactName: '',
    usContactRelationship: '',
    usContactOrganization: '',
    usContactAddress: '',
    usContactPhone: '',
    fatherName: '',
    fatherBirthDate: '',
    motherName: '',
    motherBirthDate: '',
    parentsInUS: '',
    spouseName: '',
    spouseBirthDate: '',
    spouseNationality: '',
    occupation: '',
    employerName: '',
    employerAddress: '',
    monthlyIncome: '',
    responsibilities: '',
    educationLevel: '',
    schoolName: '',
    schoolAddress: '',
    hasHealthConditions: '',
    healthConditionsDetails: '',
    hasCriminalHistory: '',
    criminalHistoryDetails: '',
    hasDrugUse: '',
    hasTerroristActivities: '',
    hasImmigrationViolations: '',
    hasMilitaryService: '',
    militaryServiceDetails: '',
    sevisId: '',
    schoolInfo: '',
    petitionDetails: '',
    previousUSTravel: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      setFormData(prev => ({
        ...prev,
        [name]: checkbox.checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowConfirmation(true);
  };

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [currentSection, setCurrentSection] = useState(1);

  const maritalStatusOptions = [
    "Single",
    "Married",
    "Divorced",
    "Widowed",
    "Separated",
    "Other"
  ];

  const purposeOfTripOptions = [
    "Business",
    "Tourism",
    "Study",
    "Work",
    "Medical Treatment",
    "Other"
  ];

  const renderPersonalInformation = () => (
    <div className="form-section">
      <h2>1. Personal Information</h2>
      <div className="form-group">
        <label htmlFor="surnames">*Surnames:</label>
        <input
          type="text"
          id="surnames"
          name="surnames"
          value={formData.surnames}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="givenNames">*Given names:</label>
        <input
          type="text"
          id="givenNames"
          name="givenNames"
          value={formData.givenNames}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="nativeAlphabet">
          *Full Name in native alphabet:
          <div className="checkbox-inline">
            <input
              type="checkbox"
              id="nativeAlphabetNotApplicable"
              name="nativeAlphabetNotApplicable"
              checked={formData.nativeAlphabetNotApplicable}
              onChange={handleChange}
            />
            <label htmlFor="nativeAlphabetNotApplicable">Not applicable or technically infeasible</label>
          </div>
        </label>
        <input
          type="text"
          id="nativeAlphabet"
          name="nativeAlphabet"
          value={formData.nativeAlphabet}
          onChange={handleChange}
          disabled={formData.nativeAlphabetNotApplicable}
          required={!formData.nativeAlphabetNotApplicable}
        />
      </div>

      <div className="form-group">
        <label>*Have you used any other name?</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="hasOtherNames"
              value="yes"
              checked={formData.hasOtherNames === 'yes'}
              onChange={handleChange}
              required
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="hasOtherNames"
              value="no"
              checked={formData.hasOtherNames === 'no'}
              onChange={handleChange}
            />
            No
          </label>
        </div>
        {formData.hasOtherNames === 'yes' && (
          <input
            type="text"
            name="otherNames"
            value={formData.otherNames}
            onChange={handleChange}
            placeholder="Please specify other names used"
            required
          />
        )}
      </div>

      <div className="form-group">
        <label>*Do you have a telecode that represents your name?</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="hasTelecode"
              value="yes"
              checked={formData.hasTelecode === 'yes'}
              onChange={handleChange}
              required
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="hasTelecode"
              value="no"
              checked={formData.hasTelecode === 'no'}
              onChange={handleChange}
            />
            No
          </label>
        </div>
      </div>

      <div className="form-group">
        <label>*Sex:</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="sex"
              value="male"
              checked={formData.sex === 'male'}
              onChange={handleChange}
              required
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="sex"
              value="female"
              checked={formData.sex === 'female'}
              onChange={handleChange}
            />
            Female
          </label>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="maritalStatus">*Marital Status:</label>
        <select
          id="maritalStatus"
          name="maritalStatus"
          value={formData.maritalStatus}
          onChange={handleChange}
          required
        >
          <option value="">Select One</option>
          {maritalStatusOptions.map(option => (
            <option key={option} value={option.toLowerCase()}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>*Date and Place of Birth</label>
        <div className="birth-details">
          <div>
            <label htmlFor="birthDate">Date:</label>
            <input
              type="date"
              id="birthDate"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="birthCity">City:</label>
            <input
              type="text"
              id="birthCity"
              name="birthCity"
              value={formData.birthCity}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="birthStateProvince">
              State/Province:
              <div className="checkbox-inline">
                <input
                  type="checkbox"
                  id="birthStateProvinceNotApplicable"
                  name="birthStateProvinceNotApplicable"
                  checked={formData.birthStateProvinceNotApplicable}
                  onChange={handleChange}
                />
                <label htmlFor="birthStateProvinceNotApplicable">Does Not Apply</label>
              </div>
            </label>
            <input
              type="text"
              id="birthStateProvince"
              name="birthStateProvince"
              value={formData.birthStateProvince}
              onChange={handleChange}
              disabled={formData.birthStateProvinceNotApplicable}
              required={!formData.birthStateProvinceNotApplicable}
            />
          </div>

          <div>
            <label htmlFor="birthCountry">Country/Region:</label>
            <select
              id="birthCountry"
              name="birthCountry"
              value={formData.birthCountry}
              onChange={handleChange}
              required
            >
              <option value="">SELECT ONE</option>
              <option value="usa">United States</option>
              <option value="canada">Canada</option>
              <option value="uk">United Kingdom</option>
              <option value="india">India</option>
              <option value="china">China</option>
              <option value="japan">Japan</option>
              <option value="australia">Australia</option>
              <option value="germany">Germany</option>
              <option value="france">France</option>
              <option value="italy">Italy</option>
            </select>
          </div>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="nationality">*Nationality:</label>
        <input
          type="text"
          id="nationality"
          name="nationality"
          value={formData.nationality}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );

  const renderPassportInformation = () => (
    <div className="form-section">
      <h2>2. Passport Information</h2>
      <div className="form-group">
        <label htmlFor="passportNumber">*Passport Number:</label>
        <input
          type="text"
          id="passportNumber"
          name="passportNumber"
          value={formData.passportNumber}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="passportBookNumber">Passport Book Number (if applicable):</label>
        <input
          type="text"
          id="passportBookNumber"
          name="passportBookNumber"
          value={formData.passportBookNumber}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="passportIssueDate">*Passport Issue Date:</label>
        <input
          type="date"
          id="passportIssueDate"
          name="passportIssueDate"
          value={formData.passportIssueDate}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="passportExpiryDate">*Passport Expiry Date:</label>
        <input
          type="date"
          id="passportExpiryDate"
          name="passportExpiryDate"
          value={formData.passportExpiryDate}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="passportCountry">*Country/Authority that issued the passport:</label>
        <select
          id="passportCountry"
          name="passportCountry"
          value={formData.passportCountry}
          onChange={handleChange}
          required
        >
          <option value="">SELECT ONE</option>
          <option value="usa">United States</option>
          <option value="canada">Canada</option>
          <option value="uk">United Kingdom</option>
          <option value="india">India</option>
          <option value="china">China</option>
          <option value="japan">Japan</option>
          <option value="australia">Australia</option>
          <option value="germany">Germany</option>
          <option value="france">France</option>
          <option value="italy">Italy</option>
        </select>
      </div>

      <div className="form-group">
        <label>Have you ever lost a passport or had one stolen?</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="hasLostPassport"
              value="yes"
              checked={formData.hasLostPassport === 'yes'}
              onChange={handleChange}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="hasLostPassport"
              value="no"
              checked={formData.hasLostPassport === 'no'}
              onChange={handleChange}
            />
            No
          </label>
        </div>
        {formData.hasLostPassport === 'yes' && (
          <textarea
            name="lostPassportDetails"
            value={formData.lostPassportDetails}
            onChange={handleChange}
            placeholder="Please provide details about the lost or stolen passport"
            required
          />
        )}
      </div>
    </div>
  );

  const renderAddressAndPhone = () => (
    <div className="form-section">
      <h2>3. Address and Phone Information</h2>
      <div className="form-group">
        <label htmlFor="homeAddress">*Home Address:</label>
        <input
          type="text"
          id="homeAddress"
          name="homeAddress"
          value={formData.homeAddress}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="homeCity">*City:</label>
        <input
          type="text"
          id="homeCity"
          name="homeCity"
          value={formData.homeCity}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="homeState">*State/Province:</label>
        <input
          type="text"
          id="homeState"
          name="homeState"
          value={formData.homeState}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="homePostalCode">*Postal Code:</label>
        <input
          type="text"
          id="homePostalCode"
          name="homePostalCode"
          value={formData.homePostalCode}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="homeCountry">*Country:</label>
        <select
          id="homeCountry"
          name="homeCountry"
          value={formData.homeCountry}
          onChange={handleChange}
          required
        >
          <option value="">SELECT ONE</option>
          <option value="usa">United States</option>
          <option value="canada">Canada</option>
          <option value="uk">United Kingdom</option>
          <option value="india">India</option>
          <option value="china">China</option>
          <option value="japan">Japan</option>
          <option value="australia">Australia</option>
          <option value="germany">Germany</option>
          <option value="france">France</option>
          <option value="italy">Italy</option>
        </select>
      </div>

      <div className="form-group">
        <label>Is your mailing address the same as your home address?</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="mailingSameAsHome"
              value="yes"
              checked={formData.mailingAddress === formData.homeAddress}
              onChange={() => {
                setFormData(prev => ({
                  ...prev,
                  mailingAddress: prev.homeAddress,
                  mailingCity: prev.homeCity,
                  mailingState: prev.homeState,
                  mailingPostalCode: prev.homePostalCode,
                  mailingCountry: prev.homeCountry
                }));
              }}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="mailingSameAsHome"
              value="no"
              checked={formData.mailingAddress !== formData.homeAddress}
              onChange={() => {
                setFormData(prev => ({
                  ...prev,
                  mailingAddress: '',
                  mailingCity: '',
                  mailingState: '',
                  mailingPostalCode: '',
                  mailingCountry: ''
                }));
              }}
            />
            No
          </label>
        </div>
      </div>

      {formData.mailingAddress !== formData.homeAddress && (
        <>
          <div className="form-group">
            <label htmlFor="mailingAddress">*Mailing Address:</label>
            <input
              type="text"
              id="mailingAddress"
              name="mailingAddress"
              value={formData.mailingAddress}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="mailingCity">*City:</label>
            <input
              type="text"
              id="mailingCity"
              name="mailingCity"
              value={formData.mailingCity}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="mailingState">*State/Province:</label>
            <input
              type="text"
              id="mailingState"
              name="mailingState"
              value={formData.mailingState}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="mailingPostalCode">*Postal Code:</label>
            <input
              type="text"
              id="mailingPostalCode"
              name="mailingPostalCode"
              value={formData.mailingPostalCode}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="mailingCountry">*Country:</label>
            <select
              id="mailingCountry"
              name="mailingCountry"
              value={formData.mailingCountry}
              onChange={handleChange}
              required
            >
              <option value="">SELECT ONE</option>
              <option value="usa">United States</option>
              <option value="canada">Canada</option>
              <option value="uk">United Kingdom</option>
              <option value="india">India</option>
              <option value="china">China</option>
              <option value="japan">Japan</option>
              <option value="australia">Australia</option>
              <option value="germany">Germany</option>
              <option value="france">France</option>
              <option value="italy">Italy</option>
            </select>
          </div>
        </>
      )}

      <div className="form-group">
        <label htmlFor="homePhone">*Home Phone Number:</label>
        <input
          type="tel"
          id="homePhone"
          name="homePhone"
          value={formData.homePhone}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="mobilePhone">*Mobile Phone Number:</label>
        <input
          type="tel"
          id="mobilePhone"
          name="mobilePhone"
          value={formData.mobilePhone}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">*Email Address:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="socialMedia">Social Media Accounts (optional):</label>
        <input
          type="text"
          id="socialMedia"
          name="socialMedia"
          value={formData.socialMedia}
          onChange={handleChange}
        />
      </div>
    </div>
  );

  const renderTravelInformation = () => (
    <div className="form-section">
      <h2>4. Travel Information</h2>
      <div className="form-group">
        <label htmlFor="purposeOfTrip">*Purpose of Trip to the U.S.:</label>
        <select
          id="purposeOfTrip"
          name="purposeOfTrip"
          value={formData.purposeOfTrip}
          onChange={handleChange}
          required
        >
          <option value="">SELECT ONE</option>
          {purposeOfTripOptions.map(option => (
            <option key={option} value={option.toLowerCase()}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="intendedArrivalDate">*Intended Date of Arrival:</label>
        <input
          type="date"
          id="intendedArrivalDate"
          name="intendedArrivalDate"
          value={formData.intendedArrivalDate}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="intendedDepartureDate">*Intended Date of Departure:</label>
        <input
          type="date"
          id="intendedDepartureDate"
          name="intendedDepartureDate"
          value={formData.intendedDepartureDate}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="usAddress">*U.S. Address where you'll stay:</label>
        <input
          type="text"
          id="usAddress"
          name="usAddress"
          value={formData.usAddress}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="tripPayer">*Who is paying for your trip?</label>
        <input
          type="text"
          id="tripPayer"
          name="tripPayer"
          value={formData.tripPayer}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="travelCompanions">Travel Companions (if any):</label>
        <textarea
          id="travelCompanions"
          name="travelCompanions"
          value={formData.travelCompanions}
          onChange={handleChange}
          placeholder="List names and relationships of travel companions"
        />
      </div>
    </div>
  );

  const renderUSContactInformation = () => (
    <div className="form-section">
      <h2>5. U.S. Contact Information</h2>
      <div className="form-group">
        <label htmlFor="usContactName">*Name of U.S. Contact:</label>
        <input
          type="text"
          id="usContactName"
          name="usContactName"
          value={formData.usContactName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="usContactRelationship">*Relationship to you:</label>
        <input
          type="text"
          id="usContactRelationship"
          name="usContactRelationship"
          value={formData.usContactRelationship}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="usContactOrganization">Organization Name (if visiting an institution):</label>
        <input
          type="text"
          id="usContactOrganization"
          name="usContactOrganization"
          value={formData.usContactOrganization}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="usContactAddress">*Address:</label>
        <input
          type="text"
          id="usContactAddress"
          name="usContactAddress"
          value={formData.usContactAddress}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="usContactPhone">*Phone Number:</label>
        <input
          type="tel"
          id="usContactPhone"
          name="usContactPhone"
          value={formData.usContactPhone}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );

  const renderFamilyInformation = () => (
    <div className="form-section">
      <h2>6. Family Information</h2>
      <div className="form-group">
        <label htmlFor="fatherName">*Father's Full Name:</label>
        <input
          type="text"
          id="fatherName"
          name="fatherName"
          value={formData.fatherName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="fatherBirthDate">*Father's Date of Birth:</label>
        <input
          type="date"
          id="fatherBirthDate"
          name="fatherBirthDate"
          value={formData.fatherBirthDate}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="motherName">*Mother's Full Name:</label>
        <input
          type="text"
          id="motherName"
          name="motherName"
          value={formData.motherName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="motherBirthDate">*Mother's Date of Birth:</label>
        <input
          type="date"
          id="motherBirthDate"
          name="motherBirthDate"
          value={formData.motherBirthDate}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Are your parents in the U.S.?</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="parentsInUS"
              value="yes"
              checked={formData.parentsInUS === 'yes'}
              onChange={handleChange}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="parentsInUS"
              value="no"
              checked={formData.parentsInUS === 'no'}
              onChange={handleChange}
            />
            No
          </label>
        </div>
      </div>

      {formData.maritalStatus === 'married' && (
        <>
          <div className="form-group">
            <label htmlFor="spouseName">*Spouse's Full Name:</label>
            <input
              type="text"
              id="spouseName"
              name="spouseName"
              value={formData.spouseName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="spouseBirthDate">*Spouse's Date of Birth:</label>
            <input
              type="date"
              id="spouseBirthDate"
              name="spouseBirthDate"
              value={formData.spouseBirthDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="spouseNationality">*Spouse's Nationality:</label>
            <input
              type="text"
              id="spouseNationality"
              name="spouseNationality"
              value={formData.spouseNationality}
              onChange={handleChange}
              required
            />
          </div>
        </>
      )}
    </div>
  );

  const renderWorkEducationInformation = () => (
    <div className="form-section">
      <h2>7. Work / Education / Training Information</h2>
      <div className="form-group">
        <label htmlFor="occupation">*Occupation:</label>
        <input
          type="text"
          id="occupation"
          name="occupation"
          value={formData.occupation}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="employerName">*Employer Name:</label>
        <input
          type="text"
          id="employerName"
          name="employerName"
          value={formData.employerName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="employerAddress">*Employer Address:</label>
        <input
          type="text"
          id="employerAddress"
          name="employerAddress"
          value={formData.employerAddress}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="monthlyIncome">*Monthly Income:</label>
        <input
          type="text"
          id="monthlyIncome"
          name="monthlyIncome"
          value={formData.monthlyIncome}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="responsibilities">*Responsibilities:</label>
        <textarea
          id="responsibilities"
          name="responsibilities"
          value={formData.responsibilities}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="educationLevel">*Highest Level of Education:</label>
        <select
          id="educationLevel"
          name="educationLevel"
          value={formData.educationLevel}
          onChange={handleChange}
          required
        >
          <option value="">SELECT ONE</option>
          <option value="high_school">High School</option>
          <option value="associate">Associate Degree</option>
          <option value="bachelor">Bachelor's Degree</option>
          <option value="master">Master's Degree</option>
          <option value="doctorate">Doctorate</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="schoolName">*School Name:</label>
        <input
          type="text"
          id="schoolName"
          name="schoolName"
          value={formData.schoolName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="schoolAddress">*School Address:</label>
        <input
          type="text"
          id="schoolAddress"
          name="schoolAddress"
          value={formData.schoolAddress}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );

  const renderSecurityBackground = () => (
    <div className="form-section">
      <h2>8. Security and Background Information</h2>
      <div className="form-group">
        <label>Do you have any health conditions?</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="hasHealthConditions"
              value="yes"
              checked={formData.hasHealthConditions === 'yes'}
              onChange={handleChange}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="hasHealthConditions"
              value="no"
              checked={formData.hasHealthConditions === 'no'}
              onChange={handleChange}
            />
            No
          </label>
        </div>
        {formData.hasHealthConditions === 'yes' && (
          <textarea
            name="healthConditionsDetails"
            value={formData.healthConditionsDetails}
            onChange={handleChange}
            placeholder="Please provide details about your health conditions"
            required
          />
        )}
      </div>

      <div className="form-group">
        <label>Do you have any criminal history?</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="hasCriminalHistory"
              value="yes"
              checked={formData.hasCriminalHistory === 'yes'}
              onChange={handleChange}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="hasCriminalHistory"
              value="no"
              checked={formData.hasCriminalHistory === 'no'}
              onChange={handleChange}
            />
            No
          </label>
        </div>
        {formData.hasCriminalHistory === 'yes' && (
          <textarea
            name="criminalHistoryDetails"
            value={formData.criminalHistoryDetails}
            onChange={handleChange}
            placeholder="Please provide details about your criminal history"
            required
          />
        )}
      </div>

      <div className="form-group">
        <label>Have you ever been involved in drug use or trafficking?</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="hasDrugUse"
              value="yes"
              checked={formData.hasDrugUse === 'yes'}
              onChange={handleChange}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="hasDrugUse"
              value="no"
              checked={formData.hasDrugUse === 'no'}
              onChange={handleChange}
            />
            No
          </label>
        </div>
      </div>

      <div className="form-group">
        <label>Have you ever been involved in terrorist activities?</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="hasTerroristActivities"
              value="yes"
              checked={formData.hasTerroristActivities === 'yes'}
              onChange={handleChange}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="hasTerroristActivities"
              value="no"
              checked={formData.hasTerroristActivities === 'no'}
              onChange={handleChange}
            />
            No
          </label>
        </div>
      </div>

      <div className="form-group">
        <label>Have you ever violated immigration laws?</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="hasImmigrationViolations"
              value="yes"
              checked={formData.hasImmigrationViolations === 'yes'}
              onChange={handleChange}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="hasImmigrationViolations"
              value="no"
              checked={formData.hasImmigrationViolations === 'no'}
              onChange={handleChange}
            />
            No
          </label>
        </div>
      </div>

      <div className="form-group">
        <label>Have you ever served in the military?</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="hasMilitaryService"
              value="yes"
              checked={formData.hasMilitaryService === 'yes'}
              onChange={handleChange}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="hasMilitaryService"
              value="no"
              checked={formData.hasMilitaryService === 'no'}
              onChange={handleChange}
            />
            No
          </label>
        </div>
        {formData.hasMilitaryService === 'yes' && (
          <textarea
            name="militaryServiceDetails"
            value={formData.militaryServiceDetails}
            onChange={handleChange}
            placeholder="Please provide details about your military service"
            required
          />
        )}
      </div>
    </div>
  );

  const renderAdditionalInformation = () => (
    <div className="form-section">
      <h2>9. Additional Information</h2>
      <div className="form-group">
        <label htmlFor="sevisId">SEVIS ID (for students):</label>
        <input
          type="text"
          id="sevisId"
          name="sevisId"
          value={formData.sevisId}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="schoolInfo">School Information (for students):</label>
        <textarea
          id="schoolInfo"
          name="schoolInfo"
          value={formData.schoolInfo}
          onChange={handleChange}
          placeholder="Provide details about your school/program"
        />
      </div>

      <div className="form-group">
        <label htmlFor="petitionDetails">Petition Details (for work visas):</label>
        <textarea
          id="petitionDetails"
          name="petitionDetails"
          value={formData.petitionDetails}
          onChange={handleChange}
          placeholder="Provide details about your work petition"
        />
      </div>

      <div className="form-group">
        <label htmlFor="previousUSTravel">Previous U.S. Travel Information:</label>
        <textarea
          id="previousUSTravel"
          name="previousUSTravel"
          value={formData.previousUSTravel}
          onChange={handleChange}
          placeholder="List your previous visits to the U.S."
        />
      </div>
    </div>
  );

  const renderSection = () => {
    switch (currentSection) {
      case 1:
        return renderPersonalInformation();
      case 2:
        return renderPassportInformation();
      case 3:
        return renderAddressAndPhone();
      case 4:
        return renderTravelInformation();
      case 5:
        return renderUSContactInformation();
      case 6:
        return renderFamilyInformation();
      case 7:
        return renderWorkEducationInformation();
      case 8:
        return renderSecurityBackground();
      case 9:
        return renderAdditionalInformation();
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>DS-160 Visa Application Form</h1>
        <p className="legend">
          * Means Mandatory to fill<br />
          • means radio buttons<br />
          // means selection list
        </p>
      </header>

      {!showConfirmation ? (
        <main className="form-container">
          <form onSubmit={handleSubmit}>
            {renderSection()}
            
            <div className="navigation-buttons">
              {currentSection > 1 && (
                <button
                  type="button"
                  className="nav-button prev-button"
                  onClick={() => setCurrentSection(prev => prev - 1)}
                >
                  Previous
                </button>
              )}
              
              {currentSection < 9 ? (
                <button
                  type="button"
                  className="nav-button next-button"
                  onClick={() => setCurrentSection(prev => prev + 1)}
                >
                  Next
                </button>
              ) : (
                <button type="submit" className="submit-button">
                  Submit Application
                </button>
              )}
            </div>
          </form>
        </main>
      ) : (
        <div className="confirmation-container">
          <h2>Save Confirmation</h2>
          <p>Your application has been saved to the database. For the next 30 days, you will be able to retrieve your application from the database by providing the Application ID and answering security questions.</p>
          <p>Choose one of the following options:</p>
          <div className="confirmation-buttons">
            <button onClick={() => setShowConfirmation(false)} className="continue-button">
              Continue Application
            </button>
            <button onClick={() => window.close()} className="exit-button">
              Exit Application
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App; 
