import React, { useState, useEffect } from 'react'
import { ListGroup ,FormControl, InputGroup, Table, Container, Row, Col, Card, CardGroup } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import {getInstance} from './utils/ToolCalcs'
import {update} from './utils/update'

export function Page5(props){

  const Tool = getInstance();

  const {active, dbCacheArray, setdbCacheArray, Entry} = props;

  const [nameEntered, setNameEntered] = useState('');
  const [categoryEntered, setCategoryEntered] = useState('');
  const [notesEntered, setNotesEntered] = useState('');
  const [assetEntered, setAssetEntered] = useState('');
  const [threatEntered, setThreatEntered] = useState('');
  const [lossEntered, setLossEntered] = useState('');

  const [padI, setpadI] = useState('');
  const [padC, setpadC] = useState('');
  const [cfaI, setcfaI] = useState('');
  const [cfaC, setcfaC] = useState('');
  const [rsI, setrsI] = useState('');
  const [rsC, setrsC] = useState('');
  const [plmrI, setplmrI] = useState('');
  const [plmrC, setplmrC] = useState('');
  const [slmrI, setslmrI] = useState('');
  const [slmrC, setslmrC] = useState('');
  const [tc, settc] = useState('');
  const [slp, setslp] = useState('');

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [buttonDisabled2, setButtonDisabled2] = useState(false);
  const [buttonDisabled3, setButtonDisabled3] = useState(false);
  const [buttonDisabled4, setButtonDisabled4] = useState(false);
  const [buttonDisabled5, setButtonDisabled5] = useState(false);
  const [buttonDisabled6, setButtonDisabled6] = useState(false);
  const [buttonDisabled7, setButtonDisabled7] = useState(false);
  const [buttonDisabled8, setButtonDisabled8] = useState(false);
  const [buttonDisabled9, setButtonDisabled9] = useState(false);
  const [buttonDisabled10, setButtonDisabled10] = useState(false);
  const [buttonDisabled11, setButtonDisabled11] = useState(false);
  const [buttonDisabled12, setButtonDisabled12] = useState(false);
  const [textbool1, settextbool1] = useState(false);
  const [textbool2, settextbool2] = useState(false);
  const [textbool3, settextbool3] = useState(false);
  const [textbool4, settextbool4] = useState(false);
  const [textbool5, settextbool5] = useState(false);

  useEffect(()=>{
    //set text fields
    setNameEntered(Entry.name);
    setCategoryEntered(Entry.category);
    setNotesEntered(Entry.notes);
    setAssetEntered(Entry.asset);
    setThreatEntered(Entry.threat);
    setLossEntered(Entry.loss);
    //set tree vars
    setcfaI(Entry.data[14]+1);
    Tool.setCFAInherent(Entry.data[14]);
    setcfaC(Entry.data[15]+1);
    Tool.setCFAControls(Entry.data[15]);
    settc(Entry.data[17]+1);
    Tool.setTC(Entry.data[17]);
    setslp(Entry.data[18]+1);
    Tool.setSLP(Entry.data[18]);
    setpadI(Entry.data[19]+1);
    Tool.setPADInherent(Entry.data[19]);
    setpadC(Entry.data[20]+1);
    Tool.setPADControls(Entry.data[20]);
    setrsI(Entry.data[22]+1);
    Tool.setRSInherent(Entry.data[22]);
    setrsC(Entry.data[23]+1);
    Tool.setRSControls(Entry.data[23]);
    setplmrI(Entry.data[25]+1);
    Tool.setPLMRInherent(Entry.data[25]);
    setplmrC(Entry.data[26]+1);
    Tool.setPLMRControls(Entry.data[26]);
    setslmrI(Entry.data[28]+1);
    Tool.setSLMRInherent(Entry.data[28]);
    setslmrC(Entry.data[29]+1);
    Tool.setSLMRControls(Entry.data[29]);

    Tool.calculateTree();
  }, [Entry, Tool])

  const handleName = event => {
    setNameEntered(event.target.value);
    if(event.target.value === ''){
      settextbool1(true);
    }
    else{
      settextbool1(false);
    }
  }

  const handleCategory = event => {
    setCategoryEntered(event.target.value);
    if(event.target.value === ''){
      settextbool2(true);
    }
    else{
      settextbool2(false);
    }
  }

  const handleNotes = event => {
    setNotesEntered(event.target.value);
  }

  const handleAsset = event => {
    setAssetEntered(event.target.value);
    if(event.target.value === ''){
      settextbool3(true);
    }
    else{
      settextbool3(false);
    }
  }

  const handleThreat = event => {
    setThreatEntered(event.target.value);
    if(event.target.value === ''){
      settextbool4(true);
    }
    else{
      settextbool4(false);
    }
  }

  const handleLoss = event => {
    setLossEntered(event.target.value);
    if(event.target.value === ''){
      settextbool5(true);
    }
    else{
      settextbool5(false);
    }
  }

  const handleSelectpadI=(value)=>{
    Tool.setPADInherent(value-1);
    Tool.calculateTreeInherents();
    setpadI(value);
    setButtonDisabled(false);
  }
  const handleSelectpadC=(value)=>{
    Tool.setPADControls(value-1);
    Tool.calculateTreeResiduals();
    setpadC(value);
    setButtonDisabled2(false);
  }
  const handleSelectcfaI=(value)=>{
    Tool.setCFAInherent(value-1);
    Tool.calculateTreeInherents();
    setcfaI(value);
    setButtonDisabled3(false);
  }
  const handleSelectcfaC=(value)=>{
    Tool.setCFAControls(value-1);
    Tool.calculateTreeResiduals();
    setcfaC(value);
    setButtonDisabled4(false);
  }
  const handleSelectrsI=(value)=>{
    Tool.setRSInherent(value-1);
    Tool.calculateTreeInherents();
    setrsI(value);
    setButtonDisabled5(false);
  }
  const handleSelectrsC=(value)=>{
    Tool.setRSControls(value-1);
    Tool.calculateTreeResiduals();
    setrsC(value);
    setButtonDisabled6(false);
  }
  const handleSelectplmrI=(value)=>{
    Tool.setPLMRInherent(value-1);
    Tool.calculateTreeInherents();
    setplmrI(value);
    setButtonDisabled7(false);
  }
  const handleSelectplmrC=(value)=>{
    Tool.setPLMRControls(value-1);
    Tool.calculateTreeResiduals();
    setplmrC(value);
    setButtonDisabled8(false);
  }
  const handleSelectslmrI=(value)=>{
    Tool.setSLMRInherent(value-1);
    Tool.calculateTreeInherents();
    setslmrI(value);
    setButtonDisabled9(false);
  }
  const handleSelectslmrC=(value)=>{
    Tool.setSLMRControls(value-1);
    Tool.calculateTreeResiduals();
    setslmrC(value);
    setButtonDisabled10(false);
  }
  const handleSelecttc=(value)=>{
    Tool.setTC(value-1);
    Tool.calculateTree();
    settc(value);
    setButtonDisabled11(false);
    }
  const handleSelectslp=(value)=>{
    Tool.setSLP(value-1);
    Tool.calculateTree();
    setslp(value);
    setButtonDisabled12(false);
  }

  const handleUpdate = (event) => {
    event.preventDefault();
    const tempLastUpdated = new Intl.DateTimeFormat('en-US').format(Date.now());
    const treeData = Tool.getTreeData();
    const _id = Entry._id;
    const dateCreated = Entry.dateCreated;

    const updatedEntry = {
      _id: _id,
      name: nameEntered,
      category: categoryEntered,
      dateCreated: dateCreated,
      lastUpdated: tempLastUpdated,
      data: treeData,
      notes: notesEntered,
      asset: assetEntered,
      threat: threatEntered,
      loss: lossEntered,
    }

    //update entry in dbCacheArray
    const temp = new Array(dbCacheArray.length);
    for(let i = 0; i < dbCacheArray.length; i++){
        if(_id !== dbCacheArray[i]._id){
          temp[i] = dbCacheArray[i];
        }
        else{
          temp[i] = updatedEntry;
        }
    }
    setdbCacheArray(temp);

    //update entry in db
    update(updatedEntry);
  }

  const popover = (
    <Popover id="popover-basic">
      {/* <Popover.Title as="h3">Updating...</Popover.Title> */}
      <Popover.Content>
         <strong>Updated</strong>
      </Popover.Content>
    </Popover>
  );

  const handleColor=(num)=>{
    if(num === '0') {
        return('green')
    } else if (num === '1') {
        return('LimeGreen')
    } else if (num === '2') {
        return('yellow')
    } else if (num === '3') {
        return('orange')
    } else if (num === '4') {
        return('red')
    }
  }

  const convertToOutputText=(num)=>{
    switch(num) {
      case 0:
        return "very low"
      case 1:
        return "low"
      case 2:
        return "medium"
      case 3:
        return "high"
      case 4:
        return "very high"
      default:
        return "default";
    }
  }

  const convertToMoney=(num)=>{
    switch(num) {
      case 0:
        return "<$9,999"
      case 1:
        return "$10,000 - $99,999"
      case 2:
        return "$100,000 - $999,999"
      case 3:
        return "$1,000,000 - $9,999,999"
      case 4:
        return ">=$10,000,000"
      default:
        return "default";
    }
  }

  return(
    <div hidden={!active}>
      <Container fluid="l" className="overflow">
        <Row>
          <Col lg="8">
            <Row>
              <Col>
                <div>
                  <InputGroup size="sm" className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text style = {{width:170}} id="inputGroup-sizing">Asset At Risk</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl value={assetEntered} onChange={handleAsset} aria-label="Small" aria-describedby="inputGroup-sizing-sm" >
                    </FormControl>
                    </InputGroup>

                  <InputGroup size="sm" className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text style = {{width:170}} id="inputGroup-sizing">Threat Community</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl value={threatEntered} onChange={handleThreat} aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                  </InputGroup>

                  <InputGroup size="sm" className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text style = {{width:170}} id="inputGroup-sizing">Loss Event</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl value={lossEntered} onChange={handleLoss} aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                  </InputGroup>

                  <InputGroup size="sm" className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text style = {{width:170}} id="inputGroup-sizing">Type of Loss Event</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl value={categoryEntered} onChange={handleCategory} aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                  </InputGroup>
                </div>
              </Col>
              <Col>
                <div>
                  <InputGroup  size="sm" className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text style = {{width:80}} id="inputGroup-sizing">Analyst</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl value={nameEntered} onChange={handleName} aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                  </InputGroup>

                  <InputGroup style = {{ height: 125}} size="sm" className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text style = {{width:80, textAlign: 'center'}} id="inputGroup-sizing">Notes</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl value={notesEntered} onChange={handleNotes} as="textarea" style = {{height: 125}} aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                  </InputGroup>
                </div>
              </Col>
            </Row>
            <Row className="treerow">
             <Col>
                <Row fluid="1">
                    <Card style={{  textAlign: 'center', borderColor: 'transparent', elevation: 0 }} className="newCard" ></Card>
                    <Card style={{  textAlign: 'center', borderColor: 'transparent', elevation: 0 }} className="placeholder1row0" ></Card>
                    <Card className="newCard" >
                    <Card.Header as="h5" className="font1 text-center" >Overall Risk</Card.Header>
                        <CardGroup>
                            <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                <Card.Title  className="font2">Inherent</Card.Title>
                                <Card.Text  className="font3" style={{ backgroundColor: handleColor(`${Tool.getORInherent()}`)}} >
                                            {convertToOutputText(Tool.getORInherent())}
                                </Card.Text>
                            </Card>
                            <Card style={{borderColor: 'transparent', elevation: 0}}>
                            </Card>
                            <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                <Card.Title  className="font2">Residual</Card.Title>
                                <Card.Text  className="font3" style={{ backgroundColor: handleColor(`${Tool.getORResidual()}`)}}>
                                            {convertToOutputText(Tool.getORResidual())}
                                </Card.Text>
                            </Card>
                        </CardGroup>
                    </Card>
                </Row>
                <Row className="treerow">
                        <Card style={{  textAlign: 'center', borderColor: 'transparent', elevation: 0 }} className="placeholder1treerow" ></Card>
                        <Card style={{  textAlign: 'center' }} className="newCard" >
                        <Card.Header as="h5"  className="font1">Primary Risk</Card.Header>
                            <CardGroup>
                                <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                    <Card.Title  className="font2">Inherent</Card.Title>
                                    <Card.Text  className="font3" style={{backgroundColor: handleColor(`${Tool.getPRInherent()}`)}} >
                                            {convertToOutputText(Tool.getPRInherent())}
                                    </Card.Text>
                                </Card>
                                <Card style={{borderColor: 'transparent', elevation: 0}}>
                                </Card>
                                <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                    <Card.Title  className="font2">Residual</Card.Title>
                                    <Card.Text  className="font3" style={{backgroundColor: handleColor(`${Tool.getPRResidual()}`)}} >
                                            {convertToOutputText(Tool.getPRResidual())}
                                    </Card.Text>
                                </Card>
                            </CardGroup>
                        </Card>
                        <Card style={{  textAlign: 'center', borderColor: 'transparent', elevation: 0 }} className="placeholder2treerow" ></Card>
                        <Card style={{  textAlign: 'center' }} className="newCard" >
                        <Card.Header as="h5"  className="font1">Secondary Risk</Card.Header>
                            <CardGroup>
                                <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                    <Card.Title  className="font2">Inherent</Card.Title>
                                    <Card.Text  className="font3" style={{ backgroundColor: handleColor(`${Tool.getSRInherent()}`)}} >
                                        {convertToOutputText(Tool.getSRInherent())}
                                   </Card.Text>
                                </Card>
                                <Card style={{borderColor: 'transparent', elevation: 0}}>

                                </Card>
                                <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                    <Card.Title  className="font2">Residual</Card.Title>
                                    <Card.Text  className="font3" style={{ backgroundColor: handleColor(`${Tool.getSRResidual()}`)}}>
                                        {convertToOutputText(Tool.getSRResidual())}
                                    </Card.Text>
                                </Card>
                            </CardGroup>
                        </Card>
                </Row>
                <Row className="treerow">
                    <Card style={{  textAlign: 'center', borderColor: 'transparent', elevation: 0 }} className="placeholder" ></Card>
                    <Card style={{ textAlign: 'center' }} className="newCard2" >
                        <Card.Header as="h5" style={{fontSize: 10}}>Primary Loss Event Frequency</Card.Header>
                            <CardGroup>
                                <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                    <Card.Title  className="font2">Inherent</Card.Title>
                                    <Card.Text  className="font5" style={{ backgroundColor: handleColor(`${Tool.getPLEFInherent()}`)}} >
                                        {Tool.getPLEFInherent()+1}
                                    </Card.Text>
                                </Card>
                                <Card style={{borderColor: 'transparent', elevation: 0}}>

                                </Card>
                                <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                    <Card.Title  className="font2">Residual</Card.Title>
                                    <Card.Text  className="font5" style={{ backgroundColor: handleColor(`${Tool.getPLEFResidual()}`)}}>
                                        {Tool.getPLEFResidual()+1}
                                    </Card.Text>
                                </Card>
                            </CardGroup>
                    </Card>
                        <Card style={{ textAlign: 'center' }} className="newCard2" >
                        <Card.Header as="h5"  style={{fontSize: 11}}>Primary Loss Magnitude Responsive</Card.Header>
                            <CardGroup>
                                <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                <Card.Title  className="font2" >Inherent</Card.Title>
                                <DropdownButton size="sm" variant="secondary" title={plmrI} id = "PLMRInherent" >
                                    <Dropdown.Item eventKey="1" onSelect={()=>handleSelectplmrI(1)}>1</Dropdown.Item>
                                    <Dropdown.Item eventKey="2" onSelect={()=>handleSelectplmrI(2)}>2</Dropdown.Item>
                                    <Dropdown.Item eventKey="3" onSelect={()=>handleSelectplmrI(3)}>3</Dropdown.Item>
                                    <Dropdown.Item eventKey="4" onSelect={()=>handleSelectplmrI(4)}>4</Dropdown.Item>
                                    <Dropdown.Item eventKey="5" onSelect={()=>handleSelectplmrI(5)}>5</Dropdown.Item>
                                </DropdownButton>
                                </Card>
                                <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                    <Card.Title  className="font2">Controls</Card.Title>
                                    <DropdownButton size="sm" variant="secondary" title={plmrC} id = "PLMRControls" >
                                        <Dropdown.Item eventKey="1" onSelect={()=>handleSelectplmrC(1)}>1</Dropdown.Item>
                                        <Dropdown.Item eventKey="2" onSelect={()=>handleSelectplmrC(2)}>2</Dropdown.Item>
                                        <Dropdown.Item eventKey="3" onSelect={()=>handleSelectplmrC(3)}>3</Dropdown.Item>
                                        <Dropdown.Item eventKey="4" onSelect={()=>handleSelectplmrC(4)}>4</Dropdown.Item>
                                        <Dropdown.Item eventKey="5" onSelect={()=>handleSelectplmrC(5)}>5</Dropdown.Item>
                                    </DropdownButton>
                                </Card>
                                <Card style={{borderColor: 'transparent', elevation: 0}}>
                                    <Card.Title  className="font2" >Residual</Card.Title>
                                    <Card.Text className="font4" style={{ backgroundColor: "LightGrey"}}>
                                         {Tool.getPLMRResidual()+1}
                                    </Card.Text>
                                </Card>
                            </CardGroup>
                    </Card>
                        <Card style={{  textAlign: 'center' }} className="newCard2" >
                            <Card.Header as="h5"  style={{ fontSize: 11}}>Secondary Loss Magnitude Responsive</Card.Header>
                                <CardGroup>
                                    <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                    <Card.Title  className="font2">Inherent</Card.Title>
                                    <DropdownButton size="sm" variant="secondary" title={slmrI} id = "SLMRInherent" >
                                        <Dropdown.Item eventKey="1" onSelect={()=>handleSelectslmrI(1)}>1</Dropdown.Item>
                                        <Dropdown.Item eventKey="2" onSelect={()=>handleSelectslmrI(2)}>2</Dropdown.Item>
                                        <Dropdown.Item eventKey="3" onSelect={()=>handleSelectslmrI(3)}>3</Dropdown.Item>
                                        <Dropdown.Item eventKey="4" onSelect={()=>handleSelectslmrI(4)}>4</Dropdown.Item>
                                        <Dropdown.Item eventKey="5" onSelect={()=>handleSelectslmrI(5)}>5</Dropdown.Item>
                                    </DropdownButton>
                                    </Card>
                                    <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                        <Card.Title  className="font2">Controls</Card.Title>
                                        <DropdownButton size="sm" variant="secondary" title={slmrC} id = "SLMRControls" >
                                            <Dropdown.Item eventKey="1" onSelect={()=>handleSelectslmrC(1)}>1</Dropdown.Item>
                                            <Dropdown.Item eventKey="2" onSelect={()=>handleSelectslmrC(2)}>2</Dropdown.Item>
                                            <Dropdown.Item eventKey="3" onSelect={()=>handleSelectslmrC(3)}>3</Dropdown.Item>
                                            <Dropdown.Item eventKey="4" onSelect={()=>handleSelectslmrC(4)}>4</Dropdown.Item>
                                            <Dropdown.Item eventKey="5" onSelect={()=>handleSelectslmrC(5)}>5</Dropdown.Item>
                                        </DropdownButton>
                                    </Card>
                                    <Card style={{borderColor: 'transparent', elevation: 0}}>
                                        <Card.Title  className="font2">Residual</Card.Title>
                                        <Card.Text  className="font4" style={{ backgroundColor: "LightGrey"}}>
                                            {Tool.getSLMRResidual()+1}
                                        </Card.Text>
                                    </Card>
                                </CardGroup>
                            </Card>
                            <Card style={{  textAlign: 'center' }} className="newCard2last" >
                            <Card.Header as="h5"  className="font1">Secondary LEF</Card.Header>
                                <CardGroup>
                                    <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                        <Card.Title  className="font2">Inherent</Card.Title>
                                        <Card.Text  className="font5" style={{ backgroundColor: handleColor(`${Tool.getSLEFInherent()}`) }} >
                                             {Tool.getSLEFInherent()+1}
                                        </Card.Text>
                                    </Card>
                                    <Card style={{borderColor: 'transparent', elevation: 0}}>

                                    </Card>
                                    <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                        <Card.Title  className="font2">Residual</Card.Title>
                                        <Card.Text  className="font5" style={{ backgroundColor: handleColor(`${Tool.getSLEFResidual()}`) }}>
                                             {Tool.getSLEFResidual()+1}
                                        </Card.Text>
                                    </Card>
                                </CardGroup>
                             </Card>
                    </Row>
                    <Row className="treerow">
                                    <Card style={{  textAlign: 'center' }} className="newCard3" >
                                    <Card.Header as="h5"  className="font1">Threat Event Frequency</Card.Header>
                                        <CardGroup>
                                            <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                                <Card.Title  className="font2">Inherent</Card.Title>
                                                <Card.Text  className="font5" style={{ backgroundColor: handleColor(`${Tool.getTEFInherent()}`) }} >
                                                    {Tool.getTEFInherent()+1}
                                                </Card.Text>
                                            </Card>
                                            <Card style={{borderColor: 'transparent', elevation: 0}}>

                                            </Card>
                                            <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                                <Card.Title  className="font2">Residual</Card.Title>
                                                <Card.Text  className="font5" style={{ backgroundColor: handleColor(`${Tool.getTEFResidual()}`) }}>
                                                    {Tool.getTEFResidual()+1}
                                                </Card.Text>
                                            </Card>
                                        </CardGroup>
                                    </Card>
                                    <Card style={{  textAlign: 'center' }} className="newCard3" >
                                    <Card.Header as="h5"  className="font1">Vulnerability</Card.Header>
                                        <CardGroup>
                                            <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                                <Card.Title  className="font2">Inherent</Card.Title>
                                                <Card.Text  className="font5" style={{ backgroundColor: handleColor(`${Tool.getVULNInherent()}`) }} >
                                                    {Tool.getVULNInherent()+1}
                                                </Card.Text>
                                            </Card>
                                            <Card style={{borderColor: 'transparent', elevation: 0}}>

                                            </Card>
                                            <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                                <Card.Title  className="font2">Residual</Card.Title>
                                                <Card.Text  className="font5" style={{ backgroundColor: handleColor(`${Tool.getVULNResidual()}`)}}>
                                                    {Tool.getVULNResidual()+1}
                                                </Card.Text>
                                            </Card>
                                        </CardGroup>
                                    </Card>
                                <Card style={{ textAlign: 'center', borderColor: 'transparent', elevation: 0 }} className="newCard3" ></Card>
                                <Card style={{ textAlign: 'center', borderColor: 'transparent', elevation: 0 }} className="newCard3" ></Card>
                                <Card style={{ textAlign: 'center', borderColor: 'transparent', elevation: 0 }} className="placeholder2" ></Card>
                                <Card style={{ textAlign: 'center' }} className="newCard2last" >
                                    <Card.Header as="h5"  style={{fontSize: 11}}>Secondary Loss Probability</Card.Header>
                                        <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                        <Card.Title  className="font1">%</Card.Title>
                                        <DropdownButton size="sm" variant="secondary" title={slp} id = "SLP" >
                                            <Dropdown.Item eventKey="1" onSelect={()=>handleSelectslp(1)}>1</Dropdown.Item>
                                                <Dropdown.Item eventKey="2" onSelect={()=>handleSelectslp(2)}>2</Dropdown.Item>
                                                <Dropdown.Item eventKey="3" onSelect={()=>handleSelectslp(3)}>3</Dropdown.Item>
                                                <Dropdown.Item eventKey="4" onSelect={()=>handleSelectslp(4)}>4</Dropdown.Item>
                                                <Dropdown.Item eventKey="5" onSelect={()=>handleSelectslp(5)}>5</Dropdown.Item>
                                            </DropdownButton>
                                        </Card>
                                    </Card>
                    </Row>
                    <Row className="treerow">
                        <Card style={{ textAlign: 'center', borderColor: 'transparent', elevation: 0 }} className="placeholder" ></Card>
                        <Card style={{  textAlign: 'center' }} className="newCard3">
                        <Card.Header as="h5"  style={{fontSize: 13}}>Control Frequency Avoidance</Card.Header>
                            <CardGroup>
                                <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                <Card.Title  className="font2">Inherent</Card.Title>
                                <DropdownButton size="sm" variant="secondary" title={cfaI} id = "CFAInherent" >
                                    <Dropdown.Item eventKey="1" onSelect={()=>handleSelectcfaI(1)}>1</Dropdown.Item>
                                    <Dropdown.Item eventKey="2" onSelect={()=>handleSelectcfaI(2)}>2</Dropdown.Item>
                                    <Dropdown.Item eventKey="3" onSelect={()=>handleSelectcfaI(3)}>3</Dropdown.Item>
                                    <Dropdown.Item eventKey="4" onSelect={()=>handleSelectcfaI(4)}>4</Dropdown.Item>
                                    <Dropdown.Item eventKey="5" onSelect={()=>handleSelectcfaI(5)}>5</Dropdown.Item>
                                </DropdownButton>
                                </Card>
                                <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                    <Card.Title  className="font2">Controls</Card.Title>
                                    <DropdownButton size="sm" variant="secondary" title={cfaC} id = "CFAControls" >
                                        <Dropdown.Item eventKey="1" onSelect={()=>handleSelectcfaC(1)}>1</Dropdown.Item>
                                        <Dropdown.Item eventKey="2" onSelect={()=>handleSelectcfaC(2)}>2</Dropdown.Item>
                                        <Dropdown.Item eventKey="3" onSelect={()=>handleSelectcfaC(3)}>3</Dropdown.Item>
                                        <Dropdown.Item eventKey="4" onSelect={()=>handleSelectcfaC(4)}>4</Dropdown.Item>
                                        <Dropdown.Item eventKey="5" onSelect={()=>handleSelectcfaC(5)}>5</Dropdown.Item>
                                    </DropdownButton>
                                </Card>
                                <Card style={{borderColor: 'transparent', elevation: 0}}>
                                    <Card.Title  className="font2">Residual</Card.Title>
                                    <Card.Text  className="font4" style={{ backgroundColor: "LightGrey"}}>
                                        {Tool.getCFAResidual()+1}
                                    </Card.Text>
                                </Card>
                            </CardGroup>
                        </Card>
                        <Card style={{  textAlign: 'center' }} className="newCard3">
                        <Card.Header as="h5"  className="font1">Threat Capability</Card.Header>
                            <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                            <Card.Title  className="font2">OWASP</Card.Title>
                            <DropdownButton size="sm" variant="secondary" title={tc} id = "TC" >
                                <Dropdown.Item eventKey="1" onSelect={()=>handleSelecttc(1)}>1</Dropdown.Item>
                                <Dropdown.Item eventKey="2" onSelect={()=>handleSelecttc(2)}>2</Dropdown.Item>
                                <Dropdown.Item eventKey="3" onSelect={()=>handleSelecttc(3)}>3</Dropdown.Item>
                                <Dropdown.Item eventKey="4" onSelect={()=>handleSelecttc(4)}>4</Dropdown.Item>
                                <Dropdown.Item eventKey="5" onSelect={()=>handleSelecttc(5)}>5</Dropdown.Item>
                            </DropdownButton>
                            </Card>
                        </Card>
                        <Card style={{  textAlign: 'center', borderColor: 'transparent', elevation: 0 }} className="newCard30" ></Card>
                        <Card style={{ textAlign: 'center', borderColor: 'transparent', elevation: 0 }} className="placeholder2" ></Card>
                        <Card style={{  textAlign: 'center' }} className="newCard2last" >
                            <Card.Header as="h5"  style={{fontSize: 12}}>Primary Loss Event Frequency</Card.Header>
                                <CardGroup>
                                    <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                        <Card.Title  className="font2">Inherent</Card.Title>
                                        <Card.Text  className="font3" style={{ backgroundColor: handleColor(`${Tool.getPLEFInherent()}`) }} >
                                            {Tool.getPLEFInherent()+1}
                                        </Card.Text>
                                    </Card>
                                    <Card style={{borderColor: 'transparent', elevation: 0}}>

                                    </Card>
                                    <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                        <Card.Title  className="font2">Residual</Card.Title>
                                        <Card.Text  className="font3" style={{ backgroundColor: handleColor(`${Tool.getPLEFResidual()}`)}}>
                                             {Tool.getPLEFResidual()+1}
                                        </Card.Text>
                                    </Card>
                                </CardGroup>
                              </Card>
                    </Row>
                    <Row className="treerow">
                         <Card style={{ textAlign: 'center', borderColor: 'transparent', elevation: 0 }} className="placeholder" ></Card>
                            <Card style={{  textAlign: 'center' }} className="newCard3">
                                <Card.Header as="h5"  style={{fontSize: 11}}>Probability of Action Deterrence</Card.Header>
                                    <CardGroup>
                                        <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                        <Card.Title  className="font2">Inherent</Card.Title>
                                            <DropdownButton size="sm" variant="secondary" title={padI} id = "PADInherent" >
                                                <Dropdown.Item eventKey="1" onSelect={()=>handleSelectpadI(1)}>1</Dropdown.Item>
                                                <Dropdown.Item eventKey="2" onSelect={()=>handleSelectpadI(2)}>2</Dropdown.Item>
                                                <Dropdown.Item eventKey="3" onSelect={()=>handleSelectpadI(3)}>3</Dropdown.Item>
                                                <Dropdown.Item eventKey="4" onSelect={()=>handleSelectpadI(4)}>4</Dropdown.Item>
                                                <Dropdown.Item eventKey="5" onSelect={()=>handleSelectpadI(5)}>5</Dropdown.Item>
                                            </DropdownButton>
                                        </Card>
                                        <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                            <Card.Title  className="font2">Controls</Card.Title>
                                            <DropdownButton size="sm" variant="secondary" title={padC} id = "PADControls" >
                                                <Dropdown.Item eventKey="1" onSelect={()=>handleSelectpadC(1)}>1</Dropdown.Item>
                                                <Dropdown.Item eventKey="2" onSelect={()=>handleSelectpadC(2)}>2</Dropdown.Item>
                                                <Dropdown.Item eventKey="3" onSelect={()=>handleSelectpadC(3)}>3</Dropdown.Item>
                                                <Dropdown.Item eventKey="4" onSelect={()=>handleSelectpadC(4)}>4</Dropdown.Item>
                                                <Dropdown.Item eventKey="5" onSelect={()=>handleSelectpadC(5)}>5</Dropdown.Item>`
                                            </DropdownButton>
                                        </Card>
                                        <Card style={{borderColor: 'transparent', elevation: 0}}>
                                            <Card.Title  className="font2">Residual</Card.Title>
                                            <Card.Text  className="font4" style={{ backgroundColor: "LightGrey"}}>
                                                 {Tool.getPADResidual()+1}
                                            </Card.Text>
                                        </Card>
                                    </CardGroup>
                            </Card>
                            <Card style={{  textAlign: 'center' }} className="newCard3" >
                            <Card.Header as="h5"  style={{fontSize: 11}}>Resistance Strength Vulnerability</Card.Header>
                                    <CardGroup>
                                        <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                        <Card.Title  className="font2">Inherent</Card.Title>
                                        <DropdownButton size="sm" variant="secondary" title={rsI} id = "RSInherent" >
                                            <Dropdown.Item eventKey="1" onSelect={()=>handleSelectrsI(1)}>1</Dropdown.Item>
                                            <Dropdown.Item eventKey="2" onSelect={()=>handleSelectrsI(2)}>2</Dropdown.Item>
                                            <Dropdown.Item eventKey="3" onSelect={()=>handleSelectrsI(3)}>3</Dropdown.Item>
                                            <Dropdown.Item eventKey="4" onSelect={()=>handleSelectrsI(4)}>4</Dropdown.Item>
                                            <Dropdown.Item eventKey="5" onSelect={()=>handleSelectrsI(5)}>5</Dropdown.Item>
                                        </DropdownButton>
                                        </Card>
                                        <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                            <Card.Title  className="font2">Controls</Card.Title>
                                            <DropdownButton size="sm" variant="secondary" title={rsC} id = "RSControls" >
                                                <Dropdown.Item eventKey="1" onSelect={()=>handleSelectrsC(1)}>1</Dropdown.Item>
                                                <Dropdown.Item eventKey="2" onSelect={()=>handleSelectrsC(2)}>2</Dropdown.Item>
                                                <Dropdown.Item eventKey="3" onSelect={()=>handleSelectrsC(3)}>3</Dropdown.Item>
                                                <Dropdown.Item eventKey="4" onSelect={()=>handleSelectrsC(4)}>4</Dropdown.Item>
                                                <Dropdown.Item eventKey="5" onSelect={()=>handleSelectrsC(5)}>5</Dropdown.Item>
                                            </DropdownButton>
                                        </Card>
                                        <Card style={{borderColor: 'transparent', elevation: 0}}>
                                            <Card.Title  className="font2">Residual</Card.Title>
                                            <Card.Text  className="font4" style={{ backgroundColor: "LightGrey"}}>
                                                {Tool.getRSResidual()+1}
                                            </Card.Text>
                                        </Card>
                                    </CardGroup>
                            </Card>
                            <Card style={{ borderColor: 'transparent', elevation: 0 }} className="newCard30" ></Card>
                            <Card style={{ textAlign: 'center', borderColor: 'transparent', elevation: 0 }} className="placeholder2" ></Card>
                            <Card style={{ borderColor: 'transparent', elevation: 0 }} className="newCard2last" >
                            <OverlayTrigger trigger="click" rootClose placement="left" overlay={popover}>
                                <Button onClick = {handleUpdate} disabled={buttonDisabled || buttonDisabled2 || buttonDisabled3 || buttonDisabled4 || buttonDisabled5 || buttonDisabled6 || buttonDisabled7 || buttonDisabled8 || buttonDisabled9 || buttonDisabled10 || buttonDisabled11 || buttonDisabled12
                                                        || textbool1 || textbool2 || textbool3 || textbool4 || textbool5}
                                variant={'success'}
                                className="newCard2lastbutton"
                                >Update</Button>
                            </OverlayTrigger>
                            </Card>
                    </Row>
              </Col>
            </Row>
          </Col>
          <Col>
            <Container fluid>
              <Row>
                <Col>
                <Table striped bordered>
                    <thead>
                      <tr>
                        <th>Summary</th>
                        <th>Inherent</th>
                        <th>Residual</th>
                       </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Overall Risk</td>
                        <td>{convertToOutputText(Tool.getORInherent())}</td>
                        <td>{convertToOutputText(Tool.getORResidual())}</td>
                      </tr>
                      <tr>
                        <td>Primary LM</td>
                        <td>{convertToMoney(Tool.getPLMRInherent())}</td>
                        <td>{convertToMoney(Tool.getPLMRResidual())}</td>
                      </tr>
                      <tr>
                        <td>Secondary LM</td>
                        <td>{convertToMoney(Tool.getSLMRInherent())}</td>
                        <td>{convertToMoney(Tool.getSLMRResidual())}</td>
                      </tr>
                    </tbody>
                  </Table>
                <Row>
                  <Col>
                  <ListGroup variant="flush" style={{fontSize:12}}>
                      <ListGroup.Item style={{fontWeight: 'bold', padding: 6}}>Loss Magnitude</ListGroup.Item>
                      <ListGroup.Item style={{padding: 6}}>1. &#60;$9,999</ListGroup.Item>
                      <ListGroup.Item style={{padding: 6}}>2. $10,000 - $99,999</ListGroup.Item>
                      <ListGroup.Item style={{padding: 6}}>3. $100,000 - $999,999</ListGroup.Item>
                      <ListGroup.Item style={{padding: 6}}>4. $1,000,000 - $9,999,999</ListGroup.Item>
                      <ListGroup.Item style={{padding: 6}}>5. &#62;$10,000,000</ListGroup.Item>
                    </ListGroup>
                    <br/>
                    <ListGroup variant="flush" style={{fontSize:12}}>
                      <ListGroup.Item style={{fontWeight: 'bold', padding: 6}}>Contact Frequency</ListGroup.Item>
                      <ListGroup.Item style={{padding: 6}}>1. &#60;0.1 times per year</ListGroup.Item>
                      <ListGroup.Item style={{padding: 6}}>2. 0.1 - 1 times per year</ListGroup.Item>
                      <ListGroup.Item style={{padding: 6}}>3. 1 - 10 times per year</ListGroup.Item>
                      <ListGroup.Item style={{padding: 6}}>4. 10 - 100 times per year</ListGroup.Item>
                      <ListGroup.Item style={{padding: 6}}>5. &#62;100 times per year</ListGroup.Item>
                    </ListGroup>
                  </Col>
                  <Col>
                    <ListGroup variant="flush"  style={{fontSize:12}}>
                      <ListGroup.Item style={{fontWeight: 'bold', padding: 6}}>Probability</ListGroup.Item>
                      <ListGroup.Item style={{padding: 6}}>1. 0% - 10%</ListGroup.Item>
                      <ListGroup.Item style={{padding: 6}}>2. 10% - 30%</ListGroup.Item>
                      <ListGroup.Item style={{padding: 6}}>3. 30% - 70%</ListGroup.Item>
                      <ListGroup.Item style={{padding: 6}}>4. 70% - 90%</ListGroup.Item>
                      <ListGroup.Item style={{padding: 6}}>5. 90% - 100%</ListGroup.Item>
                    </ListGroup>
                    <br/>
                    <ListGroup variant="flush" style={{fontSize:12}}>
                      <ListGroup.Item style={{fontWeight: 'bold', padding: 6}}>Threat Capability</ListGroup.Item>
                      <ListGroup.Item style={{padding: 6}}>1. No technical skills</ListGroup.Item>
                      <ListGroup.Item style={{padding: 6}}>2. Some technical skills</ListGroup.Item>
                      <ListGroup.Item style={{padding: 6}}>3. Advanced computer user</ListGroup.Item>
                      <ListGroup.Item style={{padding: 6}}>4. Network and programming skills</ListGroup.Item>
                      <ListGroup.Item style={{padding: 6}}>5. Security penetration skills</ListGroup.Item>
                    </ListGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <ListGroup variant="flush" style={{fontSize:12}}>
                      <ListGroup.Item style={{fontWeight: 'bold'}}>Resistance Strength</ListGroup.Item>
                      <ListGroup.Item style={{padding: 6}}>1. Only protects against bottom 2% of an average threat population</ListGroup.Item>
                      <ListGroup.Item style={{padding: 6}}>2. Only protects against bottom 16% of an average threat population</ListGroup.Item>
                      <ListGroup.Item style={{padding: 6}}>3. Protects against the average threat agent</ListGroup.Item>
                      <ListGroup.Item style={{padding: 6}}>4. Protects against all but the top 16% of an average threat population</ListGroup.Item>
                      <ListGroup.Item style={{padding: 6}}>5. Protects against all but the top 2% of an average threat population</ListGroup.Item>
                    </ListGroup>
                  </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
    );
}
